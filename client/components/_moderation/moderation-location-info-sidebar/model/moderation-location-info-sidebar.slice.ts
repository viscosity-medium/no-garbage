import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import colors from "../../../../styles/globals/colors";
import {ModerationLocationInfoSidebarSchema, SaveButtonState} from "./moderation-location-info-sidebar.types";
import {initializeModalForm} from "./moderation-location-info-sidebar.helpers";

const initialState: ModerationLocationInfoSidebarSchema = {
    modalVisibility: false,
    modalContent: {
        id: "",
        document: "",
        description: "",
        fullDescription: "",
        status: "",
        created: "",
        modified: "",
        announcement: "",
        community: "",
        location: {
            lon: 0,
            lat: 0
        },
        photos: [],
        videos: [],
        meetUpDate: "",
        meetUpTime: "",
        meetUpDescription: "",
        wasteType: ""
    },
    chosenPhoto: {
        id: "",
        preview_image_url: "",
        url: ""
    },
    saveButtonState: {
        text: "Edit form to save changes",
        isActive: false,
        textColor: colors.white,
        backgroundColor: colors.tableCellBorder
    }
}

const moderationLocationInfoSidebarSlice = createSlice({
    name: "moderation-location-info-sidebar",
    initialState,
    reducers: {
        setVisibility: state => {state.modalVisibility = !state.modalVisibility},
        setContent: (state, action) => {state.modalContent = action.payload},
        setChosenPhoto: (state, action) => {state.chosenPhoto = action.payload},
        setSaveButtonState: (state, action: PayloadAction<SaveButtonState>) => {state.saveButtonState = action.payload}
    }
});

const {
    reducer: moderationLocationInfoSidebarSliceReducer,
    actions: moderationLocationInfoSidebarSliceActions
} = moderationLocationInfoSidebarSlice;

export {
    moderationLocationInfoSidebarSliceReducer,
    moderationLocationInfoSidebarSliceActions
}