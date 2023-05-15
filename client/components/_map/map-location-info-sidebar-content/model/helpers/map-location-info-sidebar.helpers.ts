import {batch} from "react-redux";
import {locationInfoSidebarActions} from "../map-location-info-sidebar.slice";
import {mapboxActions} from "../../../../../map/model/mapbox.slice";

const hideLocationSidebar = ({map, dispatch}) => () => {

    map.current.getSource("user-points")?.setData({
        type: 'FeatureCollection',
        features: []
    });

    batch(()=>{
        dispatch(locationInfoSidebarActions.setVisibility(false));
        dispatch(mapboxActions.setUserMarkerIsSet(false));
        dispatch(mapboxActions.setUserMarkerIsHovered(false));
        dispatch(locationInfoSidebarActions.setUserMarkerProperties({
            name: "",
            coordinates: []
        }));
    });

    setTimeout(()=>{
        dispatch(locationInfoSidebarActions.setSaveButtonState({topScroll: "0px"}))
    },500);

};

export {
    hideLocationSidebar,






}