import {createSlice} from "@reduxjs/toolkit";

export interface IWasteBlockSchema {
    chosenWasteType: string
}

const initialState = {
    chosenWasteType: "Mixed"
}

const wasteBlockSlice = createSlice({
    name: "waste-block",
    initialState,
    reducers: {
        setChosenWasteType: (state, action) => {state.chosenWasteType = action.payload}
    }
})

const {
    reducer: wasteBlockReducer,
    actions: wasteBlockActions
} = wasteBlockSlice

export {
    wasteBlockReducer,
    wasteBlockActions
}