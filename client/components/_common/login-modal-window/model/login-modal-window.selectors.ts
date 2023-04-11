import {IStateSchema} from "../../../../store/state-schema";
export const getLoginEmail = (state: IStateSchema) => state.loginModal.email;
export const getLoginPassword = (state: IStateSchema) => state.loginModal.password;
export const getLoginState = (loginState: IStateSchema) => loginState.loginModal.loginState;
export const getLoginData = (loginState: IStateSchema) => loginState.loginModal.loginData;
export const getLoginVisibility = (loginState: IStateSchema) => loginState.loginModal.visibility;