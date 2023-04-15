import {createSlice} from "@reduxjs/toolkit";
export interface IPaginationSchema {
    paginationQuantity: string
    currentPage: number
}

const initialState = {
    paginationQuantity: "100",
    currentPage: 1
}

const modalSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPaginationQuantity: (state,action) => {state.paginationQuantity = action.payload},
        setCurrentPage: (state,action) => {state.currentPage = action.payload},
    }
});

const {
    reducer: paginationReducer,
    actions: paginationActions
} = modalSlice;

export {
    paginationReducer,
    paginationActions
}