import {fetchFirebaseLogin} from "./login-form.async-thunk";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginFormSchema} from "./login-form.types"
import {cookies} from "next/headers";

const initialState: LoginFormSchema = {
    loginData: undefined,
    loginState: "not-authenticated",
    visibility: false,
    email: "",
    password: "",
};

const LoginModalSlice = createSlice({
    name: "login-form",
    initialState,
    reducers: {
        setLoginFormEmail: (state, action) => {state.email = action.payload},
        setLoginFormPassword: (state, action) => {state.password = action.payload},
        setLoginFormData: (state, action) => {state.loginData = action.payload},
        setLoginFormStatus: (state, action) => {state.loginState = action.payload},
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFirebaseLogin.pending, state => {
            state.loginState = "pending"
        })
        .addCase(fetchFirebaseLogin.fulfilled, (state, action: PayloadAction<any>) => {

            if(action?.payload?.user?.auth){
                state.loginState = "success"
                //console.log(action.payload)
                state.loginData = {
                    ...action?.payload?.user,
                    tokenResponse: action?.payload?._tokenResponse
                };

                if(state.email && state.password){
                    localStorage.setItem("email", state.email);
                    localStorage.setItem("password", state.password);
                    localStorage.setItem("accessToken", state?.loginData?.stsTokenManager?.accessToken);
                    localStorage.setItem("currentUser", state?.loginData?.uid);
                    localStorage.setItem("refreshToken", state?.loginData?.stsTokenManager?.refreshToken);

                    const currentUser = state?.loginData

                    //console.log(currentUser);
                    document.cookie = (`email=${state.email}`);
                    document.cookie = (`password=${state.password}`);
                    document.cookie = (`currentUser=${currentUser.uid}`);
                    document.cookie = (`accessToken=${state?.loginData?.stsTokenManager?.accessToken}`);
                    document.cookie = (`refreshToken=${state?.loginData?.stsTokenManager?.refreshToken}`);

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
    actions: loginFormActions,
    reducer: loginFormReducer
} = LoginModalSlice

export {
    loginFormActions,
    loginFormReducer
}