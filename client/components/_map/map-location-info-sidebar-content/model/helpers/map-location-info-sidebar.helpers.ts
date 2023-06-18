import {batch} from "react-redux";
import {locationInfoSidebarActions} from "../map-location-info-sidebar.slice";
import {mapboxActions} from "../../../../../map/model/mapbox.slice";

const hideLocationSidebar = ({map, dispatch, dataStatus}) => () => {

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
        dispatch(locationInfoSidebarActions.setSubmitButtonState({
            topScroll: "0px"
        }));
        dispatch(locationInfoSidebarActions.setSubmitButtonState({
            topScroll: "0px"
        }));
        if(["success", "reject"].includes(dataStatus)){
            dispatch(locationInfoSidebarActions.setDataStatus("init"));
            dispatch(locationInfoSidebarActions.setDropboxProperties({
                title: "Click or drag file to this area to upload",
                description: "You can upload up to 10 files by adding them all together or separately",
                subDescription: "",
                boxShadow: ""
            }));
            dispatch(locationInfoSidebarActions.setFilesToUpload({}));
            dispatch(locationInfoSidebarActions.setSubmitButtonState({
                topScroll: "0px"
            }));
        }
    });

    setTimeout(()=>{
        dispatch(locationInfoSidebarActions.setSubmitButtonState({
            topScroll: "0px",
        }))
    },500);

};

export {
    hideLocationSidebar
}