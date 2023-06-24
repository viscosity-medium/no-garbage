import {DocumentData, getDocs, QueryDocumentSnapshot} from "firebase/firestore";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setFirebaseQuery} from "../../../../firebase/set-firebase-query";
import {getSortedFirebaseData} from "../../../../firebase/get-sorted-firebase-data";

export interface ModerationDataWindowSchema {
    searchBarText: string
    firebaseReports: QueryDocumentSnapshot<DocumentData>[] | undefined
    dbUsers: QueryDocumentSnapshot<DocumentData>[],
    lastVisibleDoc:  string
}

const initialState: ModerationDataWindowSchema = {
    searchBarText: "",
    firebaseReports: undefined,
    lastVisibleDoc: "",
    dbUsers: [],
};
export const fetchFirebaseReports = createAsyncThunk(
    'data-table/fetch-firebase-reports',
    async ({filter, order, paginationQuantity = "10", searchBarValue, lastDoc}: any) => {
        const querySnapshot = await getDocs(setFirebaseQuery({paginationQuantity, searchBarValue, order}));
        const lastVisibleDoc = JSON.stringify(querySnapshot.docs[querySnapshot.docs.length-1]);
        const data = getSortedFirebaseData({querySnapshot, order, filter})
        return {data, lastVisibleDoc};
    }
);
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
                state.firebaseReports = action.payload.data,
                state.lastVisibleDoc = action.payload.lastVisibleDoc
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