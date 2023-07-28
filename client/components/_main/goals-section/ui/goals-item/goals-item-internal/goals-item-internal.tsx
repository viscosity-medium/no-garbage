import React, {FC} from 'react';
import {VStack} from "../../../../../_common/flex-stack";
import {CustomNumber} from "../../../../../_common/custom-number";
import {Text} from "../../../../../_common/text";
import {useTranslation} from "next-i18next";
import {IGoalsItemInternal} from "../../../model/goals-section.types";

const GoalsItemInternal: FC<IGoalsItemInternal> = ({
    number,
    descriptionText,
    width
}) => {
    const { t } = useTranslation();
    return (
        <VStack
            justify={"center"}
            align={"flex-start"}
            margin={"0 0 0 25px"}
            width={width}
            textAlign={"center"}
        >
            <CustomNumber
                number={number}
                fontSize={"96px"}
            />

                <Text
                    tag={"span"}
                    size={"32px"}
                    fontWeight={"600"}
                    textAlign={"left"}
                >
                    {t(descriptionText)}
                </Text>
        </VStack>
    );
};

export default GoalsItemInternal;