import {useSelector} from "react-redux";
import {getMapFilters} from "./filter-block.selectors";
import {getMapboxGeoJsonData} from "../../../map/model/mapbox.selectors";
import {masterFilter} from "./filter-block.helpers";
import {useEffect} from "react";

const useSwitchMapFilter = ({map}) => {

    const filters = useSelector(getMapFilters);
    const mapboxGeoJsonData = useSelector(getMapboxGeoJsonData);

    useEffect(()=>{
        masterFilter({
            map,
            filters,
            mapboxGeoJsonData
        })
    },[filters])

};

export {
    useSwitchMapFilter
};