import {fetchFirebaseReports} from "../../data-window/data-window-slice";
import {updateFirebaseReport} from "../../../../firebase/update-firebase-report";
import {modalActions} from "./modal.slice";
import colors from "../../../../styles/globals/colors";
import {batch} from "react-redux";

const changeModalForm = ({dispatch, modalForm, setModalForm}) => (changedValue) => (event) => {

    setModalForm({
        ...modalForm,
        isChanged: true,
        [changedValue]: event
    });

    dispatch(modalActions.setSaveButtonState({
        text: "Save changes",
        isActive: true,
        textColor: colors.white,
        backgroundColor: colors.orange
    }));

}

const hideModalWindow = ({dispatch}) => () => {

    batch(()=>{
        dispatch(modalActions.setVisibility());
        dispatch(modalActions.setChosenPhoto(undefined));
        dispatch(modalActions.setSaveButtonState({
            text: "Edit form to save changes",
            isActive: false,
            textColor: colors.white,
            backgroundColor: colors.tableCellBorder
        }))
    });

};

const clickSaveButton = ({dispatch, modalForm, filter, order, paginationQuantity, searchBarValue}) => async () => {

    await updateFirebaseReport({ modalForm })
    await dispatch(fetchFirebaseReports({filter, order, paginationQuantity, searchBarValue}));
    dispatch(modalActions.setSaveButtonState({
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
        status: content?.document?.status || "",
        community: content?.document?.community || "",
        announcement: content?.document?.announcement || "",
        dateAdded: new Date(content?.document?.created_on * 1000).toLocaleDateString("en-US", options) || "",
        dateModified: new Date(content?.document?.modified_on * 1000).toLocaleDateString("en-US", options) || "",
        userName: content?.document.user_name || "",
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