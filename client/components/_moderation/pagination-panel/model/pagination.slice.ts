import {createSlice} from "@reduxjs/toolkit";

export interface PaginationSchema {
    paginationQuantity: string
    currentPage: number
}

const initialState: PaginationSchema = {
    paginationQuantity: "30",
    currentPage: 1,
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