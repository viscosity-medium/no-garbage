import { createSlice } from "@reduxjs/toolkit";

export interface ISidebarSchema {
    isOpened: boolean
}

const initialState: ISidebarSchema = {
    isOpened: false
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setIsOpened: state => {state.isOpened = !state.isOpened}
    }
})

const {
    actions: sidebarActions,
    reducer: sidebarReducer
} = sidebarSlice

export {
    sidebarActions,
    sidebarReducer
}