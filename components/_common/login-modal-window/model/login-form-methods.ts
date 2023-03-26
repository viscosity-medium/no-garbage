import {fetchFirebaseLogin, loginModalActions} from "./login-modal-window.slice";
import {useAppDispatch} from "../../../../store/store";

const loginFormMethods = ({email, password, passwordInputRef}) => {

    const dispatch = useAppDispatch();

    const onEmailChange = (value: string) => {
        dispatch(loginModalActions.setAuthModalEmail(value));
    };

    const onPasswordChange = (value: string) => {
        dispatch(loginModalActions.setAuthModalPassword(value));
    };

    const onAuthenticate = async () => {
        await dispatch(fetchFirebaseLogin({
            email: email.replace(/\s/gm, ""),
            password
        }));
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
        onEnterSubmit
    }
}

export { loginFormMethods }