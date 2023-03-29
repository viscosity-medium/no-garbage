import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {getLoginState} from "../../model/login-modal-window.selectors";
import LoginForm from "../login-form/login-form";
import Spinner from "../../../spinner/spinner";
import VStack from "../../../flex-stack/v-stack/v-stack";
import Text from "../../../text/text";
import CatImage from "public/assets/common/shocked-cat.png"
import CustomImage from "../../../custom-image/custom-image";
import Button from "../../../button/button";
import colors from "../../../../../styles/globals/colors";
import {useAppDispatch} from "../../../../../store/store";
import {loginModalActions} from "../../model/login-modal-window.slice";

const LoginContent = () => {

    const loginState = useSelector(getLoginState);
    const dispatch = useAppDispatch();

    const comeBack = () => {
        dispatch(loginModalActions.setModalLoginState("not-authenticated"))
    }

    useEffect(()=>{
        if(loginState === "success"){
            setTimeout(()=>{
                dispatch(loginModalActions.setModalVisibility());
            }, 1000)
        }
    },[loginState])

    const content = loginState === "not-authenticated" ? (
        <LoginForm/>
    ) : loginState === "pending" ? (
        <VStack
            align={"center"}
            justify={"center"}
            height={"100%"}
        >
            <Spinner/>
        </VStack>
    ) : loginState === "success" ? (
        <VStack
            align={"center"}
            justify={"center"}
            height={"100%"}
        >
            <Text
                tag={"h3"}
                text={"Hurray!"}
                size={"24px"}
            />
            <Text
                tag={"h3"}
                text={"You are logged in! =)"}
                size={"24px"}
                margin={"10px 0"}
            />
        </VStack>
    ) : loginState === "error" ? (
        <VStack
            align={"center"}
            justify={"center"}
            height={"100%"}
        >
            <CustomImage
                position={"relative"}
                backgroundImage={CatImage}
                width={"150px"}
                height={"150px"}
                zIndex={1}
            />
            <Text
                tag={"h3"}
                text={"Oops... You are not logged in..."}
                margin={"10px"}
            />
            <Button
                width={"260px"}
                color={colors.white}
                backgroundColor={colors.orange}
                borderRadius={"8px"}
                handleClick={comeBack}
            >
                Try one more time!
            </Button>
        </VStack>
    ) : <></>

    return (
        <>
            {content}
        </>

    );
};

export default LoginContent;