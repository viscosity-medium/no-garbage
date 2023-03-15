import React, {useState} from 'react';
import {AuthModalStyled} from "./auth-modal.styled";
import {ModalWindowStyled} from "../../_moderation/modal/modal-window/modal-window.styled";
import colors from "../../../styles/globals/colors";
import Button from "../button/button";
import VStack from "../flex-stack/v-stack/v-stack";
import HStack from "../flex-stack/h-stack/h-stack";
import Text from "../text/text";
import {Div} from "../custom-image/custom-div.styled";
import CustomInput from "../custom-input/custom-input";
import {firebaseInstance} from "../../../firebase/firebase-instance";

const AuthModal = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { authenticateUser } = firebaseInstance;
    const onEmailChange = (value: string) => { setEmail(prevState => value) };
    const onPasswordChange = (value: string) => { setPassword(prevState => value) };

    const onAuthenticate = async () => { await authenticateUser?.({email, password})}



    return (
        <ModalWindowStyled
            className={"moderation-modal-window"}

            background={colors.modalBackground}
            visibility={"visible"}
            opacity={1}
            height={"100vh"}
        >
            <AuthModalStyled>
                <VStack justify={"space-between"} height={"100%"}>
                    <Div zIndex={1} height={"auto"} width={"auto"} position={"relative"}>
                        <HStack
                            justify={"space-between"}
                            align={"center"}
                            margin={"10px 0 0"}
                        >
                            <Text tag={"span"} text={"Email"} size={"18px"}/>
                            <CustomInput value={email} onChange={onEmailChange} width={"300px"}/>
                        </HStack>
                        <HStack
                            justify={"space-between"}
                            align={"center"}
                            margin={"10px 0 0"}
                        >
                            <Text tag={"span"} text={"Password"} size={"18px"}/>
                            <CustomInput value={password} onChange={onPasswordChange} type={"password"} width={"300px"}/>
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
                </VStack>
            </AuthModalStyled>
        </ModalWindowStyled>
    );
};

export default AuthModal;