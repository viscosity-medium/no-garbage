import React from 'react';
import {Spinner} from "../../../spinner";
import {VStack} from "../../../flex-stack";

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