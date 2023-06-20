import { moderationLocationInfoSidebarSliceActions } from "../../moderation-location-info-sidebar/model/moderation-location-info-sidebar.slice";
import { dateOptions } from "../ui/table-row/table-row";
import { batch } from "react-redux";
import colors from "../../../../styles/globals/colors";

export interface TableRowInfo {
    id: any,
    document: any,
    description: any,
    status: any,
    wasteType: any,
    community: any,
    announcement: any,
    created: any,
    modified: any,
    photos: any,
    videos: any,
    location: any,
    userName: any,
    meetUpDate: any,
    meetUpTime: any,
    meetUpDescription: any,
}

const onTableRowClickHandler = ({
    tableRowInfo,
    dispatch,
    modalVisibility
}) => () => {

    const {
        id, document, description,
        status, created, modified,
        community, announcement,
        location, photos, videos,
        meetUpDate, meetUpTime, meetUpDescription
    }: TableRowInfo = tableRowInfo;

    const dateAdded = created ? new Date(created * 1000).toLocaleDateString("en-US", dateOptions) : "————";
    const dateModified = modified ? new Date(modified * 1000).toLocaleDateString("en-US", dateOptions) : "————";

    batch(()=>{
        !modalVisibility ? dispatch(moderationLocationInfoSidebarSliceActions.setVisibility()) : null;
        dispatch(moderationLocationInfoSidebarSliceActions.setChosenPhoto(photos[0]));
        dispatch(moderationLocationInfoSidebarSliceActions.setContent({
            id, document, description,
            status, community,
            created: dateAdded,
            modified: dateModified,
            announcement, photos, location, videos,
            meetUpDate, meetUpTime, meetUpDescription
        }));
        dispatch(moderationLocationInfoSidebarSliceActions.setSaveButtonState({
            text: "Edit form to save changes",
            isActive: false,
            textColor: colors.white,
            backgroundColor: colors.tableCellBorder
        }))
    })
};

export { onTableRowClickHandler }