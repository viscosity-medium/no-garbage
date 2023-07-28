import {batch, useDispatch} from "react-redux";
import {
    moderationLocationInfoSidebarSliceActions
} from "../../../components/_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.slice";

export const onEscapeFunction = ({dispatch}) => {
    batch(()=>{
        dispatch(moderationLocationInfoSidebarSliceActions.setVisibility());
        dispatch(moderationLocationInfoSidebarSliceActions.setChosenPhoto(undefined));
    });
}