import {createSlice} from "@reduxjs/toolkit";

interface IModalContent {
    description?: string
    status?: string
    created?: any
    announcement?: string
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
}

const initialState = {
    modalVisibility: false,
    modalContent: undefined,
    chosenPhoto: undefined,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setVisibility: state => {state.modalVisibility = !state.modalVisibility},
        setContent: (state, action) => {state.modalContent = action.payload},
        setChosenPhoto: (state, action) => {state.chosenPhoto = action.payload}
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