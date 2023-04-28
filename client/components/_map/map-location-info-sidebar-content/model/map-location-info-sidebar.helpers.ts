import {batch} from "react-redux";
import {locationInfoSidebarActions} from "./map-location-info-sidebar.slice";
import {mapboxActions} from "../../../../map/model/mapbox.slice";

const hideLocationSidebar = ({map, dispatch}) => () => {

    console.log(map)

    map.current.getSource("user-points")?.setData({
        type: 'FeatureCollection',
        features: []
    });

    batch(()=>{
        dispatch(locationInfoSidebarActions.setVisibility(false));
        dispatch(mapboxActions.setUserMarkerIsSet());
        dispatch(locationInfoSidebarActions.setUserMarkerCoordinates([]));
    })

};

export {
    hideLocationSidebar
}