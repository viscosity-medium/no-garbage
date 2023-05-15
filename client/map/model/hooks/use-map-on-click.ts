import {useEffect} from "react";
import {useSelector} from "react-redux";
import {mapboxActions} from "../mapbox.slice";
import {MapMouseEvent} from "mapbox-gl";
import {useAppDispatch} from "../../../store/store";
import {setUserMapMarker} from "../map.helpers";
import {getMapboxMarkerIsHovered, getMapboxMarkerIsSet} from "../mapbox.selectors";
import {
    locationInfoSidebarActions
} from "../../../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.slice";
import {mapboxApi} from "../../../utilities/mapbox-api";
import {getLanguage} from "../../../components/_common/nav-bar/nav-bar.selectors";

const useMapOnClick = ({map}) => {

    const markerIsSet = useSelector(getMapboxMarkerIsSet);
    const markerIsHovered = useSelector(getMapboxMarkerIsHovered);
    const language = useSelector(getLanguage);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        
            const showMarkerOnClick = async (e: MapMouseEvent)=>{

                if(!markerIsHovered){

                    const c = e.lngLat.wrap();
                    const coordinates = [c.lng, c.lat];

                    map.current.flyTo({
                        center: coordinates,
                        zoom: 13,
                        duration: 1500
                    });

                    setUserMapMarker({map, sourceId: "user-points", coordinates});
                    const mapboxLocationInformation = await mapboxApi.getMapboxLocationInfo({
                        coordinates: coordinates.toString(),
                        language
                    }).then((response)=> response.data.features[0].place_name);

                    dispatch(mapboxActions.setUserMarkerIsSet(true));
                    dispatch(locationInfoSidebarActions.setUserMarkerProperties({
                        name: mapboxLocationInformation,
                        coordinates
                    }));
                }

            }

            const hideMarkerOnClick = (e) => {

                if(markerIsSet && markerIsHovered){

                    map.current.getSource("user-points")?.setData({
                        type: 'FeatureCollection',
                        features: []
                    });

                    dispatch(mapboxActions.setUserMarkerIsSet(false));
                    dispatch(mapboxActions.setUserMarkerIsHovered(false));
                    dispatch(locationInfoSidebarActions.setUserMarkerProperties({
                        name: "",
                        coordinates: []
                    }));

                    setTimeout(()=>{
                        dispatch(locationInfoSidebarActions.setSaveButtonState({topScroll: "0px"}))
                    },500);

                }

            }

            const setMarkerIsHovered = () => {
                dispatch(mapboxActions.setUserMarkerIsHovered(true));
            };
            const setMarkerIsNotHovered = () => {
                dispatch(mapboxActions.setUserMarkerIsHovered(false));
            }

            if(map.current !== null){

                map.current.on("click", showMarkerOnClick);
                map.current.on("click", "user-points", hideMarkerOnClick);
                map.current.on("mouseenter", "user-points", setMarkerIsHovered);
                map.current.on("mouseleave", "user-points", setMarkerIsNotHovered)

                const features = map?.current?.getSource("user-points")?._data?.features;

                return () => {
                    map.current.off("click", showMarkerOnClick);
                    map.current.off("click", "user-points", hideMarkerOnClick);
                    map.current.off("mouseenter", "user-points", setMarkerIsHovered);
                    map.current.off("mouseleave", "user-points", setMarkerIsNotHovered)
                };
            }


    },[markerIsSet, markerIsHovered, language]);

}

export {
    useMapOnClick
}