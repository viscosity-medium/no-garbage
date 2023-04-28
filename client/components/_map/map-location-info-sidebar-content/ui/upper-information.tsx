import React from 'react';
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import Text from "../../../_common/text/text";

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
                tag={"span"}
                size={"14px"}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in ex eleifend, faucibus libero ac, lobortis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in ex eleifend, faucibus libero ac, lobortis leo.
            </Text>
        </VStack>
    );
};

export default UpperInformation;