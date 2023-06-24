import {StateSchema} from "../../../../store/state-schema";
export const getLoginEmail = (state: StateSchema) => state.loginForm.email;
export const getLoginPassword = (state: StateSchema) => state.loginForm.password;
export const getLoginState = (loginState: StateSchema) => loginState.loginForm.loginState;
export const getLoginData = (loginState: StateSchema) => loginState.loginForm.loginData;
