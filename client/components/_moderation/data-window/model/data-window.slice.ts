import {createSlice} from "@reduxjs/toolkit";
import {fetchFirebaseReports} from "./data-window.async-thunks";
import {ModerationDataWindowSchema} from "./data-window.types";

const initialState: ModerationDataWindowSchema = {
    searchBarText: "",
    firebaseReports: undefined,
    firstVisibleDoc: "",
    lastVisibleDoc: "",
    reportsCount: undefined,
    dbUsers: [],
};

export const moderationDataWindow = createSlice({
    name: 'moderation-data-window',
    initialState,
    reducers: {
        setSearchBarText: (state, action) => {
            state.searchBarText = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFirebaseReports.pending, state => {
                state.firebaseReports = undefined
            })
            .addCase(fetchFirebaseReports.fulfilled, (state, action) => {
                state.firebaseReports = action.payload.data;
                state.reportsCount = action.payload.totalDocsCount;
            })
            .addCase(fetchFirebaseReports.rejected, state => {
                state.firebaseReports = []
            })
    }
})

const {
    actions: moderationDataWindowActions,
    reducer: moderationDataWindowReducer
} = moderationDataWindow

export {
    moderationDataWindowActions,
    moderationDataWindowReducer
}