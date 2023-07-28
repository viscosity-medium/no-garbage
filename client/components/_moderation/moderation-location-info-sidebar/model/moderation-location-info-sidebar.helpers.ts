import {updateFirebaseReportAndGeoJson} from "../../../../firebase/update-firebase-report-and-geo-json";
import {moderationLocationInfoSidebarSliceActions} from "./moderation-location-info-sidebar.slice";
import colors from "../../../../styles/globals/colors";
import {batch} from "react-redux";
import {fetchFirebaseReports} from "../../data-window/model/data-window.async-thunks";

interface ChangeModalForm {
    changedValue: any,
    inputType: any,
    internalProperty?: string
}

const changeModalForm = ({dispatch, modalForm}) => ({
    changedValue,
    inputType,
    internalProperty
}: ChangeModalForm) => (event) => {

    const newValue = (() => {

        switch (inputType) {
            case "input":
                return event?.target?.value !== undefined ? event?.target?.value : event;
            case "select":
                return event;
        }

    })();


    dispatch(moderationLocationInfoSidebarSliceActions.setSaveButtonState({
        text: "Save changes",
        isActive: true,
        textColor: colors.white,
        backgroundColor: colors.orange
    }));

    if(changedValue !== "location" || !internalProperty){
        dispatch(moderationLocationInfoSidebarSliceActions.setContent(
            {
                ...modalForm,
                isChanged: true,
                [changedValue]: newValue
            }
        ));
    } else {

        const coordinatesValue = (newValue.replace(/\D/gm, ''));
        const coordinatesValueLength = coordinatesValue.length;
        const coordinateRightFormat = coordinatesValueLength> 2 ? `${coordinatesValue.slice(0, 2)}.${coordinatesValue.slice(2, coordinatesValueLength)}` : coordinatesValue;

        dispatch(moderationLocationInfoSidebarSliceActions.setContent(
            {
                ...modalForm,
                isChanged: true,
                [changedValue]: {
                    ...modalForm[changedValue],
                    [internalProperty]: +coordinateRightFormat
                }
            }
        ));
    }

};

const hideModalWindow = ({dispatch}) => () => {

    batch(()=>{
        dispatch(moderationLocationInfoSidebarSliceActions.setVisibility());
        dispatch(moderationLocationInfoSidebarSliceActions.setChosenPhoto(undefined));
        dispatch(moderationLocationInfoSidebarSliceActions.setSaveButtonState({
            text: "Edit form to save changes",
            isActive: false,
            textColor: colors.white,
            backgroundColor: colors.tableCellBorder
        }))
    });

};

const clickSaveButton = ({
    dispatch, modalForm, filter, order,
    paginationQuantity, searchBarValue, firstDoc, lastDoc, currentPage
}) => async () => {

    await updateFirebaseReportAndGeoJson({ modalForm });
    await dispatch(fetchFirebaseReports({
        filter, order, paginationQuantity, firstDoc,
        searchBarValue, lastDoc, currentPage
    }));
    dispatch(moderationLocationInfoSidebarSliceActions.setSaveButtonState({
        text: "Changes saved!",
        isActive: false,
        textColor: colors.white,
        backgroundColor: colors.veryDarkGreen
    }));

}

const initializeModalForm = ({content}) => {

    const options: any = {year: 'numeric', month: 'long', day: 'numeric'};

    return ({
        id: content?.document?.id,
        description: content?.document?.description || "",
        fullDescription: content?.document?.full_description || "",
        status: content?.document?.status || "",
        wasteType: content?.document?.waste_type || "",
        community: content?.document?.community || "",
        announcement: content?.document?.announcement || "",
        dateAdded: content?.document?.created_on ? new Date(content?.document?.created_on * 1000).toLocaleDateString("en-US", options) : "",
        dateModified: content?.document?.modified_on ? new Date(content?.document?.modified_on * 1000).toLocaleDateString("en-US", options) : "",
        userName: content?.document?.user_name || "",
        meetUpDate: content?.document?.meet_up?.date || "",
        meetUpTime: content?.document?.meet_up?.time || "",
        meetUpDescription: content?.document?.meet_up?.description || "",

        isChanged: false
    });

}

export {
    changeModalForm,
    hideModalWindow,
    clickSaveButton,
    initializeModalForm
}