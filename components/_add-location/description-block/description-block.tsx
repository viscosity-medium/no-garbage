import React from 'react';
import VStack from "../../_common/flex-stack/v-stack/v-stack";
import Text from "../../_common/text/text";
import TextArea from "../../_common/text-area/text-area";
import colors from "../../../styles/globals/colors";
import Button from "../../_common/button/button";

const DescriptionBlock = () => {
    return (
        <VStack
            width={"752px"}
            height={"auto"}
            margin={"45px 0 0"}
            justify={"space-between"}
        >
            <Text
                tag={"span"}
                text={"Describe the location"}
                size={"24px"}
            />
            <TextArea
                margin={"35px 0 0 32px"}
                width={"720px"}
                height={"215px"}
            />
            <Button
                width={"233px"}
                height={"56px"}
                margin={"48px 0 0 241px"}
                color={colors.white}
                backgroundColor={colors.submitBtn}
                buttonName={"Submit the form"}
                borderRadius={"16px"}
                size={"24px"}
            />
        </VStack>
    );
};

export default DescriptionBlock;