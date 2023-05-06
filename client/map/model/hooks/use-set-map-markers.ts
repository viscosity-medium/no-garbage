import {useEffect} from "react";
import {fetchMapboxGeoJson} from "../mapbox.slice";
import {loadMapboxMarkers} from "../map.helpers";
import {useAppDispatch} from "../../../store/store";

const useSetMapMarkers = ({map}) => {
    const dispatch = useAppDispatch()
    useEffect(()=> {

        (async ()=>{

            const data: any = await dispatch(fetchMapboxGeoJson());
            const geoJsonData = data.payload.mapboxGeoJsonData.data;

            await loadMapboxMarkers({map, geoJsonData});

        })()

    },[])
}

export {useSetMapMarkers}