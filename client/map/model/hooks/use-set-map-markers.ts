import {useEffect} from "react";

import {loadMapboxMarkers} from "../map.helpers";
import {useAppDispatch} from "../../../store/store";
import {fetchMapboxGeoJson} from "../map.async-thunks";
import {useSelector} from "react-redux";
import {getMapFilters} from "../../../components/_map/filters-block/model/filter-block.selectors";

const useSetMapMarkers = ({map}) => {

    const dispatch = useAppDispatch();
    const mapFilters = useSelector(getMapFilters);

    //console.log(mapFilters)

    useEffect(()=> {

        (async ()=>{

            const data: any = await dispatch(fetchMapboxGeoJson());
            const geoJsonData = data.payload.mapboxGeoJsonData.data;

            await loadMapboxMarkers({
                map,
                geoJsonData
            });

            //const source = map.current.getSource("Common waste-points")
            //console.log(source)

        })();

    },[])
}

export {useSetMapMarkers}