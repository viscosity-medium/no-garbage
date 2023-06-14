import {createSlice} from "@reduxjs/toolkit";
import {fetchMainPageDynamicInfo} from "./main-page.async-thunks";

export interface MainPageGoals {
    cleanups_number: number
    garbage_kilograms: number
    volunteers_number: number
}

export interface MainPageSchema {
    dynamicInfo: {
        main_page: {
            goals: MainPageGoals
        }
    } | undefined
}

const initialState: MainPageSchema = {
    dynamicInfo: undefined
}

const mainPageSlice = createSlice({
    name: "main-page",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMainPageDynamicInfo.pending, state => {

        })
        .addCase(fetchMainPageDynamicInfo.fulfilled, (state, action) => {
            state.dynamicInfo = action.payload[0]
        })
        .addCase(fetchMainPageDynamicInfo.rejected, state => {

        })
    }
});

const {
    actions: mainPageActions,
    reducer: mainPageReducer
} = mainPageSlice;

export {
    mainPageActions,
    mainPageReducer
}