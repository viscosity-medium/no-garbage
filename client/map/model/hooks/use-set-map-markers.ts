import {useEffect} from "react";
import {fetchMapboxGeoJson} from "../mapbox.slice";
import {loadMapboxMarkers} from "../map.helpers";
import mapboxGL from "mapbox-gl";
import {useAppDispatch} from "../../../store/store";

const useSetMapMarkers = ({map}) => {
    const dispatch = useAppDispatch()
    useEffect(()=> {

        (async ()=>{

            const data: any = await dispatch(fetchMapboxGeoJson());
            const geoJsonData = data.payload.mapboxGeoJsonData.data;

            loadMapboxMarkers({map, geoJsonData});

        })()

    },[])
}

export {useSetMapMarkers}