import {createSlice} from "@reduxjs/toolkit";

type PaginationDirection = "next" | "prev" | "freeze" | "save";

export interface PaginationSchema {
    paginationQuantity: string
    currentPage: number
    paginationDirection: PaginationDirection
}

const initialState: PaginationSchema = {
    paginationQuantity: "30",
    currentPage: 1,
    paginationDirection: "freeze"
}

const modalSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPaginationQuantity: (state,action) => {state.paginationQuantity = action.payload},
        setCurrentPage: (state,action) => {state.currentPage = action.payload},
        setPaginationDirection: (state, action: {payload: PaginationDirection}) => {state.paginationDirection = action.payload}
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