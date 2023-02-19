import {createSlice} from "@reduxjs/toolkit";
export interface INavbarSchema {
    language: string
}

const initialState: INavbarSchema = {
    language: "",
}

const modalSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setLanguage: (state, action) => {state.language = action.payload},
    },
});

const {
    reducer: navbarReducer,
    actions: navbarActions
} = modalSlice;

export {
    navbarReducer,
    navbarActions
}