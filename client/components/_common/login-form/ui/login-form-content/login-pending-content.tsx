import React from 'react';
import Spinner from "../../../spinner/spinner";
import VStack from "../../../flex-stack/v-stack/v-stack";

const LoginPendingContent = () => {
    return (
        <VStack
            align={"center"}
            justify={"center"}
            height={"100%"}
        >
            <Spinner/>
        </VStack>
    );
};

export {LoginPendingContent};