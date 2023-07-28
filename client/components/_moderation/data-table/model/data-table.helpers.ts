import { moderationLocationInfoSidebarSliceActions } from "../../moderation-location-info-sidebar/model/moderation-location-info-sidebar.slice";
import { dateOptions } from "../ui/table-row/table-row";
import { batch } from "react-redux";
import colors from "../../../../styles/globals/colors";
import {moderationDataWindowActions} from "../../data-window/model/data-window.slice";

export interface TableRowInfo {
    id: any,
    document: any,
    description: string,
    fullDescription?: string
    status: any,
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
    wasteType: string
}

const onTableRowClickHandler = ({
    tableRowInfo,
    dispatch,
    modalVisibility,
    index
}) => () => {

    const {
        id, document, description,
        status, created, modified,
        community, announcement,
        location, photos, videos,
        meetUpDate, meetUpTime,
        meetUpDescription, fullDescription,
        wasteType
    }: TableRowInfo = tableRowInfo;

    const dateAdded = created ? new Date(created * 1000).toLocaleDateString("en-US", dateOptions) : "————";
    const dateModified = modified ? new Date(modified * 1000).toLocaleDateString("en-US", dateOptions) : "————";

    batch(()=>{
        !modalVisibility ? dispatch(moderationLocationInfoSidebarSliceActions.setVisibility()) : null;
        dispatch(moderationDataWindowActions.setModerationTableChosenRow(index));
        dispatch(moderationLocationInfoSidebarSliceActions.setChosenPhoto(photos[0]));
        dispatch(moderationLocationInfoSidebarSliceActions.setContent({
            id, document, description,
            fullDescription,
            hasFullDescription: !!fullDescription,
            status, community,
            created: dateAdded,
            modified: dateModified, wasteType,
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