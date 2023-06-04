import {createSlice} from "@reduxjs/toolkit";

export interface MapPageSchema {
    uniqueMapSessionId: string | undefined
}

const initialState = {
    uniqueMapSessionId: undefined
}

const mapPageSlice = createSlice({
    name: "map-page",
    initialState,
    reducers: {
        setUniqueMapSessionId: (state, action) => {state.uniqueMapSessionId = action.payload}
    }
})

const {
    reducer: mapPageReducer,
    actions: mapPageActions
} = mapPageSlice;

export {
    mapPageReducer,
    mapPageActions
}