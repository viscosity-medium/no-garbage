import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LocationInfoSidebarSchema, SubmitButtonState} from "./map-location-info-sidebar.types";

const initialState: LocationInfoSidebarSchema = {
    modalVisibility: false,
    modalContent: undefined,
    userMarkerCoordinates: [],
    filesInFormData: {},
    userMarkerLocationName: "",
    dropboxProperties: {
        title: "Click or drag file to this area to upload",
        description: "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files",
        boxShadow: ""
    },
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
        setFilesInFormData: (state, action) => {state.filesInFormData = action.payload},
        setDropboxProperties: (state, action) => {state.dropboxProperties = action.payload},
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