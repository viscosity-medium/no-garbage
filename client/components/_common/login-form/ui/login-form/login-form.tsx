import React from 'react';
import {useSelector} from "react-redux";
import {getLoginState} from "../../model/login-form.selectors";
import {useAppDispatch} from "../../../../../store/store";
import {getModalWindowVisibility} from "../../../modal-window/model/modal-window.selectors";
import {useSetDelayedSwitchModalVisibility} from "../../../modal-window/model/modal-window.hooks";
import {useSetModalFormContent} from "../../model/login-form.hooks";
import {VStack} from "../../../flex-stack";
import {Button} from "../../../button";
import CrossSvgIcon from "public/assets/common/cross-icon.svg";
import {switchModalWindowVisibility} from "../../../modal-window/model/modal-window.helpers";
import {LoginFormStyled} from "./login-form.styled";

const LoginForm = () => {

    const dispatch = useAppDispatch();
    const loginState = useSelector(getLoginState);
    const modalVisibility = useSelector(getModalWindowVisibility);
    const modalFormContent = useSetModalFormContent();

    useSetDelayedSwitchModalVisibility({
        dispatch, modalVisibility, loginState
    });

    return (
        <LoginFormStyled>
            <VStack
                justify={"space-between"}
                height={"100%"}
            >
                <Button
                    position={"absolute"}
                    right={"0"}
                    width={"18px"}
                    height={"18px"}
                    border={"none"}
                    margin={"0 0 0 auto"}
                    onClick={() => switchModalWindowVisibility({dispatch})}
                >
                    <CrossSvgIcon
                        width={"18px"}
                        height={"18px"}
                    />
                </Button>
                {
                    modalFormContent
                }
            </VStack>
        </LoginFormStyled>

    );
};

export { LoginForm };