import {useEffect} from "react";
import {useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {getMapboxMarkerIsSet} from "../../../map/model/mapbox.selectors";
import {
    locationInfoSidebarActions
} from "../../../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.slice";

const useSwitchMapLocationInfoSidebar = () => {

    const mapboxIsSet = useSelector(getMapboxMarkerIsSet);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(locationInfoSidebarActions.setVisibility(mapboxIsSet))
    },[mapboxIsSet]);

}

export {
    useSwitchMapLocationInfoSidebar
}