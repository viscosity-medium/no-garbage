import {createAsyncThunk} from "@reduxjs/toolkit";
import {mapboxApi} from "../../utilities/mapbox-api";

const fetchMapboxGeoJson = createAsyncThunk(
    "mapbox/fetch-mapbox-geo-json",
    async () => {
        const mapboxGeoJsonData = await mapboxApi.getMapboxGeoJsonData();
        return {mapboxGeoJsonData};
    }
);

export {
    fetchMapboxGeoJson
}