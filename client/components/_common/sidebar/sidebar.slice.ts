import { createSlice } from "@reduxjs/toolkit";

export interface SidebarSchema {
    isOpened: boolean
}

const initialState: SidebarSchema = {
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