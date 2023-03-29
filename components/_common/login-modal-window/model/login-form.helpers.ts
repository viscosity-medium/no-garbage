import {fetchFirebaseLogin, loginModalActions} from "./login-modal-window.slice";
import {useAppDispatch} from "../../../../store/store";

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

    const onEmailChange = (value: string) => {
        dispatch(loginModalActions.setAuthModalEmail(value));
    };

    const hideLoginModal = () => {
        dispatch(loginModalActions.setModalVisibility());
    };

    const onEscapeDown = (loginModalIsVisible) => (e) => {
        if(e.key === "Escape" && loginModalIsVisible){
            dispatch(loginModalActions.setModalVisibility());
        }
    };

    const onPasswordChange = (value: string) => {
        dispatch(loginModalActions.setAuthModalPassword(value));
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
        hideLoginModal,
        onEscapeDown,
        onEmailChange,
        onPasswordChange,
        onFocusPasswordInput,
        onAuthenticate,
        onEnterSubmit
    }
}

export { loginFormHelpers }