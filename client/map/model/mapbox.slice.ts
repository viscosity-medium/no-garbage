import {createSlice} from "@reduxjs/toolkit";
import {MapboxSchema} from "./mapbox.types";
import {fetchMapboxGeoJson} from "./map.async-thunks";

const initialState: MapboxSchema = {
    geoJsonData: "non-filled",
    userMarkerIsSet: false,
    userMarkerIsHovered: false,
    geoJsonMarkers: []
}

export const mapbox = createSlice({
    name: "mapbox",
    initialState,
    reducers: {
        setDefaultMapState: state => {
            state.userMarkerIsSet = false
            state.userMarkerIsHovered = false
        },
        setUserMarkerIsSet: (state, action) => {state.userMarkerIsSet = action.payload},
        setUserMarkerIsHovered: (state, action) => {state.userMarkerIsHovered = action.payload},
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