import React from 'react';
import Text from "../../../text/text";
import VStack from "../../../flex-stack/v-stack/v-stack";

const LoginSuccessContent = () => {
    return (
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
    );
};

export { LoginSuccessContent};