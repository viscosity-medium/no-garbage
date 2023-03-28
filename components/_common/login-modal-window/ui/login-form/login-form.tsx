import {fetchFirebaseLogin, loginModalActions} from "../../model/login-modal-window.slice";
import {getLoginEmail, getLoginPassword} from "../../model/login-modal-window.selectors";
import {useAppDispatch} from "../../../../../store/store";
import {useSelector} from "react-redux";
import CustomInput from "../../../custom-input/custom-input";
import Button from "../../../button/button";
import {Div} from "../../../custom-image/custom-div.styled";
import HStack from "../../../flex-stack/h-stack/h-stack";
import Text from "../../../text/text";
import colors from "../../../../../styles/globals/colors";
import {FC, useRef, useState} from "react";
import {loginFormMethods} from "../../model/login-form-methods";

const LoginForm: FC = () => {

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const {
        onEmailChange, onPasswordChange,
        onFocusPasswordInput, onAuthenticate, onEnterSubmit
    } = loginFormMethods({ email, password, passwordInputRef });


    return (
        <>
            <Div
                margin={"30px 0 0"}
                zIndex={1}
                height={"auto"}
                width={"auto"}
                position={"relative"}
            >
                <HStack
                    justify={"space-between"}
                    align={"center"}
                >
                    <Text tag={"span"} text={"Email"} size={"18px"}/>
                    <CustomInput
                        value={email}
                        onChange={onEmailChange}
                        onEnter={onFocusPasswordInput}
                        width={"300px"}
                    />

                </HStack>
                <HStack
                    justify={"space-between"}
                    align={"center"}
                    margin={"10px 0 0"}
                >
                    <Text tag={"span"} text={"Password"} size={"18px"}/>
                    <CustomInput
                        ref={passwordInputRef}
                        value={password}
                        onChange={onPasswordChange}
                        onEnter={onEnterSubmit}
                        type={"password"}
                        width={"300px"}/>
                </HStack>
            </Div>

            <HStack justify={"center"}>
                <Button
                    width={"200px"}
                    buttonName={"Войти"}
                    backgroundColor={colors.pastelGray}
                    handleClick={onAuthenticate}
                />
            </HStack>
        </>
    );
};

export default LoginForm;