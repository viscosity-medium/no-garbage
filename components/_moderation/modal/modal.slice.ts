import {createSlice} from "@reduxjs/toolkit";
import colors from "../../../styles/globals/colors";

export interface IModalContent {
    id: string
    document: any
    description?: string
    status?: string
    created?: any
    modified?: any
    announcement?: string
    community?: string
    location: {
        lon: number,
        lat: number
    }
    photos?: string[]

}
export interface IModalSchema {
    modalVisibility: boolean
    modalContent: IModalContent | undefined
    chosenPhoto: string | undefined
    saveButtonState: {
        text: string
        isActive: boolean,
        textColor: string
        backgroundColor: string
    }
}

const initialState = {
    modalVisibility: false,
    modalContent: undefined,
    chosenPhoto: undefined,
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
        setSaveButtonState: (state, action) => {state.saveButtonState = action.payload}
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