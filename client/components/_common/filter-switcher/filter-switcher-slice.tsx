import {createSlice} from "@reduxjs/toolkit";

export interface IFilterSwitchSchema {
    allFilters: string[]
    filter: string
    order: "asc" | "desc"
    types: any
}

const initialState: IFilterSwitchSchema = {
    allFilters: ["created_on", "status", "description"],
    filter: "created_on",
    order: "asc",
    types: {
        created_on: "DateAdded",
        status: "Status",
        description: "Description",
    }
};



const filterSwitcherSlice = createSlice({
    name: 'filter-switcher',
    initialState,
    reducers: {
        setCurrentFilter: (state, action) => {state.filter = action.payload},
        setCurrentOrder: (state, action) => {state.order = action.payload}
    },
})

const {
    actions: filterSwitcherActions,
    reducer: filterSwitcherReducer
} = filterSwitcherSlice

export {
    filterSwitcherActions,
    filterSwitcherReducer
}