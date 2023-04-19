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
    mapboxGeoJsonData: "non-filled",

}

export const mapbox = createSlice({
    name: "mapbox",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMapboxGeoJson.pending, state => {
            state.mapboxGeoJsonData = "pending"
        })
        .addCase(fetchMapboxGeoJson.fulfilled, (state, action) => {
            state.mapboxGeoJsonData = action.payload.mapboxGeoJsonData.data
        })
        .addCase(fetchMapboxGeoJson.rejected, state => {
            state.mapboxGeoJsonData = "error"
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