import {useAppDispatch} from "../../../../store/store";
import {loginFormActions} from "./login-form.slice";
import {fetchFirebaseLogin} from "./login-form.async-thunk";

interface LoginFormHelpers {
    email?: string,
    password?: string,
    passwordInputRef?: any
}


const loginFormHelpers = ({
    email,
    password,
    passwordInputRef,
}: LoginFormHelpers) => {

    const dispatch = useAppDispatch();

    const onEmailChange = (e) => {
        dispatch(loginFormActions.setLoginFormEmail(e?.target?.value));
    };

    const onPasswordChange = (e) => {
        dispatch(loginFormActions.setLoginFormPassword(e?.target?.value));
    };

    const onAuthenticate = async () => {
        if(email && password){
            await dispatch(fetchFirebaseLogin({
                email: email?.replace(/\s/gm, ""),
                password
            }));
        }
    };

    const onFocusPasswordInput = () => {
        passwordInputRef?.current && passwordInputRef?.current?.focus();
    };

    const onEnterSubmit = async () => {
        await onAuthenticate();
    };

    return {

        onEmailChange,
        onPasswordChange,
        onFocusPasswordInput,
        onAuthenticate,
        onEnterSubmit,
    }
}

export const setLoginNotAuthenticatedState = ({dispatch}) => {
    dispatch(loginFormActions.setLoginFormStatus("not-authenticated"));
}

export { loginFormHelpers }