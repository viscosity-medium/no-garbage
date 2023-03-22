import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {firebaseInstance} from "../../../../firebase/firebase-instance";

export interface FetchFirebaseLogin {
    email: string
    password: string
}
export interface LoginModalSlice extends FetchFirebaseLogin{
    loginState: "not-authenticated" | "pending" | "success" | "error",
    loginData: any,
    visibility: boolean
}

const initialState: LoginModalSlice = {
    loginData: undefined,
    loginState: "not-authenticated",
    visibility: false,
    email: "",
    password: "",
};

interface LoginResponse {
    auth?: any
    name?: string
    code?: string
}

const { authenticateUser } = firebaseInstance;

export const fetchFirebaseLogin = createAsyncThunk(
    "/",
    async ({email, password}: FetchFirebaseLogin)=> {
        return await authenticateUser?.({email, password});
    })

const LoginModalSlice = createSlice({
    name: "login-modal-slice",
    initialState,
    reducers: {
        setAuthModalEmail: (state, action) => {state.email = action.payload},
        setAuthModalPassword: (state, action) => {state.password = action.payload},
        setAuthModalLoginData: (state, action) => {state.loginData = action.payload},
        setModalVisibility: (state) => {state.visibility = !state.visibility},
        setModalLoginState: (state, action) => {state.loginState = action.payload},
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFirebaseLogin.pending, state => {
            state.loginState = "pending"
        })
        .addCase(fetchFirebaseLogin.fulfilled, (state, action: PayloadAction<any>) => {

            if(action?.payload?.auth){
                state.loginState = "success"
                state.loginData = action.payload;
                state.visibility = false;

                if(state.email && state.password){
                    localStorage.setItem("email", state.email);
                    localStorage.setItem("password", state.password);
                    localStorage.setItem("accessToken", state?.loginData?.stsTokenManager?.accessToken);
                    localStorage.setItem("refreshToken", state?.loginData?.stsTokenManager?.refreshToken);
                }

            } else if ( ["auth/invalid-email", "auth/wrong-password"].includes(action?.payload?.code) || action?.payload?.name === "FirebaseError"){
                state.loginState = "error";
                state.email = "";
                state.password = "";
            }

        })
        .addCase(fetchFirebaseLogin.rejected, (state, action) => {
            state.loginState = "error";
            state.email = "";
            state.password = "";
        })
    }
});

const {
    actions: loginModalActions,
    reducer: loginModalReducer
} = LoginModalSlice

export {
    loginModalActions,
    loginModalReducer
}