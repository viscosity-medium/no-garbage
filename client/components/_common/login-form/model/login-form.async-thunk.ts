import {firebaseInstance} from "../../../../firebase/firebase-instance";
import {createAsyncThunk} from "@reduxjs/toolkit";

const { authenticateUser } = firebaseInstance;
export const fetchFirebaseLogin = createAsyncThunk(
    "/",
    async ({email, password}: FetchFirebaseLogin)=> {
        return await authenticateUser?.({email, password});
})
