import React from 'react';
import {HStack,VStack} from "../../../../../_common/flex-stack";
import {Text} from "../../../../../_common/text";
import {CustomInput} from "../../../../../_common/custom-input";

const LocationInputItem = ({title, inputValue, description}) => {

    return (
        <VStack
            margin={"4px 0"}
        >
            <HStack>
                <Text
                    tag={"span"}
                    size={"16px"}
                >
                    {title}
                </Text>
            </HStack>
            <VStack margin={"4px 0"}>
                <CustomInput
                    value={inputValue}
                    fontSize={"16px"}
                    width={"100%"}
                    disabled={true}
                    color={"rgba(0,0,0,0.4)"}
                    border={"1px solid rgba(0,0,0,0.3)"}
                    caretColor={"transparent"}
                />
            </VStack>
            <Text
                tag={"span"}
                size={"14px"}
                color={"rgba(0,0,0, 0.6)"}
            >
                {description}
            </Text>
        </VStack>
    );

};

export { LocationInputItem };