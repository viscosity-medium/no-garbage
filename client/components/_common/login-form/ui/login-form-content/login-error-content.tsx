import React from 'react';
import CustomImage from "../../../custom-image/custom-image";
import CatImage from "public/assets/common/shocked-cat.png"
import Text from "../../../text/text";
import Button from "../../../button/button";
import colors from "../../../../../styles/globals/colors";
import VStack from "../../../flex-stack/v-stack/v-stack";
import {setLoginNotAuthenticatedState} from "../../model/login-form.helpers";
import {useAppDispatch} from "../../../../../store/store";

const LoginErrorContent = () => {

    const dispatch = useAppDispatch();

    return (
        <VStack
            align={"center"}
            justify={"center"}
            height={"100%"}
        >
            <CustomImage
                position={"relative"}
                backgroundImage={CatImage}
                width={"130px"}
                height={"130px"}
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
                onClick={() => setLoginNotAuthenticatedState({dispatch})}
            >
                Try one more time!
            </Button>
        </VStack>
    );
};

export {
    LoginErrorContent
};