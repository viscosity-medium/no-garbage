import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import colors from "../../../../styles/globals/colors";
import {LocationInfoSidebarSchema, SubmitButtonState} from "./map-location-info-sidebar.types";

const initialState: LocationInfoSidebarSchema = {
    modalVisibility: false,
    modalContent: undefined,
    userMarkerCoordinates: [],
    userMarkerLocationName: "",
    submitButtonState: {
        topScroll: "0px"
    }
}

const mapLocationInfoSidebarSlice = createSlice({
    name: "location-info-sidebar",
    initialState,
    reducers: {
        setVisibility: (state, action) => {state.modalVisibility = action.payload},
        setContent: (state, action) => {state.modalContent = action.payload},
        setUserMarkerCoordinates: (state, action) => {state.userMarkerCoordinates = action.payload},
        setUserMarkerLocationName: (state, action) => {state.userMarkerLocationName = action.payload},
        setSaveButtonState: (state, action: PayloadAction<SubmitButtonState>) => {state.submitButtonState = action.payload}
    }
});

const {
    reducer: locationInfoSidebarReducer,
    actions: locationInfoSidebarActions
} = mapLocationInfoSidebarSlice;

export {
    locationInfoSidebarReducer,
    locationInfoSidebarActions
}