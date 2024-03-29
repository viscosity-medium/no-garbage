import React from 'react';
import {VStack} from "../../../../../_common/flex-stack";
import {Text} from "../../../../../_common/text";

const UpperInformation = () => {
    return (
        <VStack
            margin={"10px 0 0"}
        >
            <Text
                tag={"h3"}
                size={"20px"}
            >
                Submit your location for future cleanups
            </Text>
            <Text
                margin={"10px 0 0 "}
                lineHeight={"1.4"}
                tag={"span"}
                size={"14px"}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in ex eleifend, faucibus libero ac, lobortis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in ex eleifend, faucibus libero ac, lobortis leo.
            </Text>
        </VStack>
    );
};

export { UpperInformation };