import React, {useEffect, useState} from "react";
import {LoginNotAuthContent} from "../ui/login-form-content/login-not-auth-content";
import {LoginPendingContent} from "../ui/login-form-content/login-pending-content";
import {LoginSuccessContent} from "../ui/login-form-content/login-success-content";
import {LoginErrorContent} from "../ui/login-form-content/login-error-content";
import {useSelector} from "react-redux";
import {getLoginState} from "./login-form.selectors";

export const useSetModalFormContent = () => {

    const [modalFormContent, setModalFormContent] = useState<JSX.Element>(<LoginNotAuthContent/>);
    const loginState = useSelector(getLoginState);

    useEffect(()=>{
        switch (loginState){
            case "not-authenticated":
                setModalFormContent(<LoginNotAuthContent/>);
                break;
            case "pending":
                setModalFormContent(<LoginPendingContent/>);
                break;
            case "success":
                setModalFormContent(<LoginSuccessContent/>);
                break;
            case "error":
                setModalFormContent(<LoginErrorContent/>);
                break;
        }
    },[loginState])

    return modalFormContent;
}