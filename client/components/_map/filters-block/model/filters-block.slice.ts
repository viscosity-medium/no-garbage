import {createSlice} from "@reduxjs/toolkit";

type FormState = "init" | "filled" | "reset";

export interface FilterBlockSchema {
    formState: "init" | "filled" | "reset"
    mapFilters: {
        "Communities": string[],
        "Status of location": string[],
        "Type of Litter": string[]
    }
}

const initialState: FilterBlockSchema = {
    formState: "init",
    mapFilters: {
        "Communities": [],
        "Status of location": [],
        "Type of Litter": []
    }
}

const filtersBlockSlice = createSlice({
    name: "filter-block",
    initialState,
    reducers: {
        setMapFilters: (state, action) => {state.mapFilters = {...state.mapFilters, ...action.payload}},
        setFormState: (state, action: {payload: FormState}) => {state.formState = action.payload}
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