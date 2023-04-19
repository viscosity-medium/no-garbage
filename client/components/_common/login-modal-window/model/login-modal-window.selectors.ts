import {StateSchema} from "../../../../store/state-schema";
export const getLoginEmail = (state: StateSchema) => state.loginModal.email;
export const getLoginPassword = (state: StateSchema) => state.loginModal.password;
export const getLoginState = (loginState: StateSchema) => loginState.loginModal.loginState;
export const getLoginData = (loginState: StateSchema) => loginState.loginModal.loginData;
export const getLoginVisibility = (loginState: StateSchema) => loginState.loginModal.visibility;