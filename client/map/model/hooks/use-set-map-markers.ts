import {useEffect} from "react";

import {loadMapboxMarkers} from "../map.helpers";
import {useAppDispatch} from "../../../store/store";
import {fetchMapboxGeoJson} from "../map.async-thunks";

const useSetMapMarkers = ({map}) => {
    const dispatch = useAppDispatch()
    useEffect(()=> {

        (async ()=>{

            const data: any = await dispatch(fetchMapboxGeoJson());
            const geoJsonData = data.payload.mapboxGeoJsonData.data;

            await loadMapboxMarkers({map, geoJsonData});

            //const source = map.current.getSource("Common waste-points")
            //console.log(source)


        })()

    },[])
}

export {useSetMapMarkers}