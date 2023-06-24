import {getLoginEmail, getLoginPassword} from "../../model/login-form.selectors";
import {useSelector} from "react-redux";
import {CustomInput} from "../../../custom-input";
import {Button} from "../../../button";
import {Div} from "../../../custom-image/ui/custom-div.styled";
import {HStack} from "../../../flex-stack";
import {Text} from "../../../text";
import colors from "../../../../../styles/globals/colors";
import {FC, useRef} from "react";
import {loginFormHelpers} from "../../model/login-form.helpers";

const LoginNotAuthContent: FC = () => {

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const {
        onEmailChange, onPasswordChange,
        onFocusPasswordInput, onAuthenticate, onEnterSubmit
    } = loginFormHelpers({ email, password, passwordInputRef });

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
                        type={"email"}
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
                    width={"260px"}
                    buttonName={"Войти"}
                    backgroundColor={colors.pastelGray}
                    borderRadius={"8px"}
                    onClick={onAuthenticate}
                />
            </HStack>
        </>
    );
};

export {LoginNotAuthContent};