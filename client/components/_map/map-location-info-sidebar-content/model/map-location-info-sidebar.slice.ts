import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LocationInfoSidebarSchema, SubmitButtonState} from "./map-location-info-sidebar.types";
import {uploadMapFilesToTheServerByChunks} from "./map-location-info-sidebar.async-thunks";

const initialState: LocationInfoSidebarSchema = {
    modalVisibility: false,
    filesToUpload: {},
    userMarkerProperties: {
        name: "",
        coordinates: []
    },
    dropboxProperties: {
        title: "Click or drag file to this area to upload",
        description: "You can upload up to 10 files by adding them all together or separately",
        subDescription: "",
        boxShadow: ""
    },
    textAreaContent: "",
    submitButtonState: {
        topScroll: "0px",
    },
    dataStatus: "init"
}




const mapLocationInfoSidebarSlice = createSlice({
    name: "location-info-sidebar",
    initialState,
    reducers: {
        setVisibility: (state, action) => {state.modalVisibility = action.payload},
        setFilesToUpload: (state, action) => {state.filesToUpload = action.payload},
        setDropboxProperties: (state, action) => {state.dropboxProperties = action.payload},
        setUserMarkerProperties: (state, action) => {state.userMarkerProperties = action.payload},
        setTextAreaContent: (state, action) => {state.textAreaContent = action.payload},
        setSubmitButtonState: (state, action: PayloadAction<SubmitButtonState>) => {state.submitButtonState = action.payload},
        setDataStatus: (state, action: PayloadAction<"init" | "pending" | "success" | "reject">) => {state.dataStatus = action.payload}
    },
    extraReducers: (builder) => {
        builder
        .addCase( uploadMapFilesToTheServerByChunks.pending , (state, action) => {
            state.dataStatus = "pending";
        })
        .addCase( uploadMapFilesToTheServerByChunks.fulfilled , (state, action) => {
            state.submitButtonState = {
                topScroll: "-80px"
            };
            state.dataStatus = "success";
            state.submitButtonState = {
                topScroll: "-80px"
            };
            // const sidebarScrollerContainer = document ? document?.querySelector(".sidebar-scroll-inner") : null;
            // sidebarScrollerContainer?.scrollTo({
            //     behavior: "smooth",
            //     top: 1000
            // })
        })
        .addCase( uploadMapFilesToTheServerByChunks.rejected , (state, action) => {
            console.log("reject")
            state.submitButtonState = {
                topScroll: "0px"
            };
            state.dataStatus = "reject";
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