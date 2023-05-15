import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LocationInfoSidebarSchema, SubmitButtonState} from "./map-location-info-sidebar.types";
import {uploadMapFilesToTheServer} from "./map-location-info-sidebar.async-thunks";

const initialState: LocationInfoSidebarSchema = {
    modalVisibility: false,
    filesToUpload: {},
    userMarkerProperties: {
        name: "",
        coordinates: []
    },
    dropboxProperties: {
        title: "Click or drag file to this area to upload",
        description: "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files",
        boxShadow: ""
    },
    textAreaContent: {
        title: "",
        description: ""
    },
    submitButtonState: {
        topScroll: "0px",
    }
}

const mapLocationInfoSidebarSlice = createSlice({
    name: "location-info-sidebar",
    initialState,
    reducers: {
        setVisibility: (state, action) => {state.modalVisibility = action.payload},
        setFilesToUpload: (state, action) => {state.filesToUpload = action.payload},
        setDropboxProperties: (state, action) => {state.dropboxProperties = action.payload},
        setUserMarkerProperties: (state, action) => {state.userMarkerProperties = action.payload},
        setSaveButtonState: (state, action: PayloadAction<SubmitButtonState>) => {state.submitButtonState = action.payload}
    },
    extraReducers: (builder) => {
        builder
        .addCase( uploadMapFilesToTheServer.pending , (state, action) => {
            console.log()
        })
        .addCase( uploadMapFilesToTheServer.fulfilled , (state, action) => {

        })
        .addCase( uploadMapFilesToTheServer.rejected , (state, action) => {

        })
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