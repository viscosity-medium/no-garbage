import {createSlice} from "@reduxjs/toolkit";

export interface ModalWindowSchema {
    visibility: boolean
}

const initialState: ModalWindowSchema = {
    visibility: false,
};

const ModalWindowSlice = createSlice({
    name: "modal-window",
    initialState,
    reducers: {
        setModalVisibility: (state) => {
            state.visibility = !state.visibility;
        },
    },
});

const {
    actions: modalWindowActions,
    reducer: modalWindowReducer
} = ModalWindowSlice

export {
    modalWindowActions,
    modalWindowReducer
}