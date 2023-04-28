import {useEffect} from "react";
import {useSelector} from "react-redux";
import {mapboxActions} from "../mapbox.slice";
import {MapMouseEvent} from "mapbox-gl";
import {useAppDispatch} from "../../../store/store";
import {addNewMapMarker} from "../map.helpers";
import {getMapboxMarkerIsSet} from "../mapbox.selectors";
import {
    locationInfoSidebarActions
} from "../../../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.slice";
import {mapboxApi} from "../../../utilities/mapbox-api";
import {getLanguage} from "../../../components/_common/nav-bar/nav-bar.selectors";

const useMapOnClick = ({map}) => {

    const markerIsSet = useSelector(getMapboxMarkerIsSet);
    const language = useSelector(getLanguage);
    const dispatch = useAppDispatch();

    useEffect(()=>{

        const showMarkerOnClick = async (e: MapMouseEvent)=>{

            const c = e.lngLat.wrap();
            const coordinates = [c.lng, c.lat];

            if(!markerIsSet){

                map.current.flyTo({
                    center: coordinates,
                    zoom: 13,
                    duration: 1500
                });

                addNewMapMarker({map, sourceId: "user-points", coordinates});
                const mapboxLocationInformation = await mapboxApi.getMapboxLocationInfo({
                    coordinates: coordinates.toString(),
                    language
                });

                dispatch(mapboxActions.setUserMarkerIsSet());
                dispatch(locationInfoSidebarActions.setUserMarkerCoordinates(coordinates))

            }

        }

        const hideMarkerOnClick = () => {

            if(markerIsSet){

                map.current.getSource("user-points")?.setData({
                    type: 'FeatureCollection',
                    features: []
                });

                dispatch(mapboxActions.setUserMarkerIsSet());
                dispatch(locationInfoSidebarActions.setUserMarkerCoordinates([]));

            }

        }

        if(map.current !== null){

            map.current.on("click", showMarkerOnClick);
            map.current.on("click", "user-points", hideMarkerOnClick);

            return () => {
                map.current.off("click", showMarkerOnClick);
                map.current.off("click", "user-points", hideMarkerOnClick);
            };
        }

    },[markerIsSet, language]);

}

export {
    useMapOnClick
}