import {useEffect} from "react";
import {useAppDispatch} from "../../../store/store";
import {
    moderationLocationInfoSidebarSliceActions
} from "../../../components/_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.slice";
import {batch, useSelector} from "react-redux";
import {
    getModalVisibility
} from "../../../components/_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.selectors";
import {moderationDataWindowActions} from "../../../components/_moderation/data-window/model/data-window.slice";

export const useResetModerationPage = () => {

    const isVisible = useSelector(getModalVisibility);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        batch(()=>{
            if(isVisible){
                dispatch(moderationLocationInfoSidebarSliceActions.setVisibility());
            }
            dispatch(moderationDataWindowActions.setSearchBarText(""));
        })
    },[]);

}