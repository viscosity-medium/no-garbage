import {createSlice} from "@reduxjs/toolkit";

export interface FilterSwitchSchema {
    allFilters: string[]
    filter: string
    order: "asc" | "desc"
    types: any
}

const initialState: FilterSwitchSchema = {
    allFilters: ["created_on", "status", "description"],
    filter: "created_on",
    order: "desc",
    types: {
        created_on: "DateAdded",
        status: "Status",
        description: "Description",
    }
};

const filterSwitchSlice = createSlice({
    name: 'filter-switcher',
    initialState,
    reducers: {
        setCurrentFilter: (state, action) => {state.filter = action.payload},
        setCurrentOrder: (state, action) => {state.order = action.payload}
    },
});

const {
    actions: filterSwitcherActions,
    reducer: filterSwitcherReducer
} = filterSwitchSlice

export {
    filterSwitcherActions,
    filterSwitcherReducer
}