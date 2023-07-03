import {createSlice} from "@reduxjs/toolkit";
import {fetchDynamicInfo} from "./layout.async-thunks";

export interface MainPageGoals {
    cleanups_number: number
    garbage_kilograms: number
    volunteers_number: number
}

export interface LayoutSchema {
    dynamicInfo: {
        general_information: {
            communities: string[]
            location_statuses: string[]
            waste_types: string[]
        }
        main_page: {
            goals: MainPageGoals
        }
    } | undefined
}

const initialState: LayoutSchema = {
    dynamicInfo: undefined
}

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDynamicInfo.pending, state => {

        })
        .addCase(fetchDynamicInfo.fulfilled, (state, action) => {
            state.dynamicInfo = action.payload[0]
        })
        .addCase(fetchDynamicInfo.rejected, state => {

        })
    }
});

const {
    actions: layoutActions,
    reducer: layoutReducer
} = layoutSlice;

export {
    layoutActions,
    layoutReducer
}