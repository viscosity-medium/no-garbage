import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {mapboxApi} from "../../utilities/mapbox-api";
import {MapboxSchema} from "./mapbox.types";


export const fetchMapboxGeoJson = createAsyncThunk(
    "mapbox/fetch-mapbox-geo-json",
    async () => {
        const mapboxGeoJsonData = await mapboxApi.getMapboxGeoJsonData();
        return {mapboxGeoJsonData};
    }
);

const initialState: MapboxSchema = {
    geoJsonData: "non-filled",
    userMarkerIsSet: false,
    geoJsonMarkers: []
}

export const mapbox = createSlice({
    name: "mapbox",
    initialState,
    reducers: {
        setUserMarkerIsSet: state => {state.userMarkerIsSet = !state.userMarkerIsSet},
        setGeoJsonMarkers: (state, action) => {state.geoJsonMarkers = action.payload}
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMapboxGeoJson.pending, state => {
            state.geoJsonData = "pending"
        })
        .addCase(fetchMapboxGeoJson.fulfilled, (state, action) => {
            state.geoJsonData = action.payload.mapboxGeoJsonData.data
        })
        .addCase(fetchMapboxGeoJson.rejected, state => {
            state.geoJsonData = "error"
        })
    }
})

const {
    actions: mapboxActions,
    reducer: mapboxReducer
} = mapbox;

export {
    mapboxReducer,
    mapboxActions
}