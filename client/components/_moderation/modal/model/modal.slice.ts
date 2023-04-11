import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import colors from "../../../../styles/globals/colors";
import {IModalSchema, SaveButtonState} from "./modal.types";

const initialState: IModalSchema = {
    modalVisibility: false,
    modalContent: undefined,
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

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setVisibility: state => {state.modalVisibility = !state.modalVisibility},
        setContent: (state, action) => {state.modalContent = action.payload},
        setChosenPhoto: (state, action) => {state.chosenPhoto = action.payload},
        setSaveButtonState: (state, action: PayloadAction<SaveButtonState>) => {state.saveButtonState = action.payload}
    }
});

const {
    reducer: modalReducer,
    actions: modalActions
} = modalSlice;

export {
    modalReducer,
    modalActions
}