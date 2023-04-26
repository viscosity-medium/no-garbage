import {useEffect} from "react";
import {useSelector} from "react-redux";
import {mapboxActions} from "../mapbox.slice";
import {MapMouseEvent} from "mapbox-gl";
import {useAppDispatch} from "../../../store/store";
import {addNewMapMarker} from "../map.helpers";
import {getMapboxMarkerIsSet} from "../mapbox.selectors";

const useMapOnClick = ({map}) => {

    const markerIsSet = useSelector(getMapboxMarkerIsSet);
    const dispatch = useAppDispatch();

    useEffect(()=>{

        const showMarkerOnClick = (e: MapMouseEvent)=>{

            const c = e.lngLat.wrap();
            const coordinates = [c.lng, c.lat];

            if(!markerIsSet){
                map.current.flyTo({
                    center: coordinates,
                    zoom: 13,
                    duration: 1500
                })

                addNewMapMarker({map, sourceId: "user-points", coordinates});
                dispatch(mapboxActions.setUserMarkerIsSet())
            }

        }

        const hideMarkerOnClick = (e) => {
            map.current.getSource("user-points")?.setData({
                type: 'FeatureCollection',
                features: []
            });
            dispatch(mapboxActions.setUserMarkerIsSet())
        }

        map?.current?.on("click", showMarkerOnClick);
        map.current.on("click", `user-points`, hideMarkerOnClick);

        return () => (
            map.current.off("click", showMarkerOnClick) &&
            map.current.off("click", showMarkerOnClick)
    );

    },[markerIsSet]);

}

export {
    useMapOnClick
}