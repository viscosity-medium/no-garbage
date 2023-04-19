import {createSlice} from "@reduxjs/toolkit";

export interface FilterBlockSchema {
    mapFilters: any
}

const initialState = {
    mapFilters: {
        "Communities": [],
        "Status of location": [],
        "Type of Litter": []
    }
}

const filtersBlockSlice =createSlice({
    name: "filter-block",
    initialState,
    reducers: {
        setMapFilters: (state, action) => {state.mapFilters = {...state.mapFilters, ...action.payload}}
    }
})

const {
    actions: filterBlockActions,
    reducer: filterBlockReducer
} = filtersBlockSlice;

export {
    filterBlockActions,
    filterBlockReducer
}