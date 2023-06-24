import {firebaseInstance} from "../../../../firebase/firebase-instance";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchFirebaseLogin} from "./login-form.types";

const { authenticateUser } = firebaseInstance;
export const fetchFirebaseLogin = createAsyncThunk(
    "/",
    async ({email, password}: FetchFirebaseLogin)=> {
        return await authenticateUser?.({email, password});
})
