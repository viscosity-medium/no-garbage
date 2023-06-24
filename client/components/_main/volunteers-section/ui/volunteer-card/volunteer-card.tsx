import React from 'react';
import {HStack, VStack} from "../../../../_common/flex-stack";
import {CustomImage} from "../../../../_common/custom-image";
import colors from "../../../../../styles/globals/colors";
import {Text} from "../../../../_common/text";

const VolunteerCard = () => {

    const volunteer = "/assets/main-page/volunteer.png"

    return (
        <HStack
            margin={"0 20px"}
            padding={"53px 40px"}
            width={"724px"}
            height={"356px"}
            border={"2px solid #100F0F"}
            borderRadius={"30px"}
            background={colors.white}
        >
            <CustomImage
                position={"relative"}
                backgroundImage={volunteer}
                zIndex={1}
                width={"250px"}
                height={"250px"}
                borderRadius={"50%"}
            />
            <VStack
                margin={"0 0 0 26px"}
                width={"370px"}
                align={"flex-start"}
            >
                <Text
                    tag={"h3"}
                    size={"28px"}
                    lineHeight={"1.2"}
                >
                    Name Surname
                </Text>
                <Text
                    tag={"span"}
                    margin={"6px 0 19px"}
                    weight={"700"}
                    lineHeight={"32px"}
                >
                    Community, Job, 22 y.o.
                </Text>
                <Text
                    tag={"span"}
                    size={"20px"}
                    lineHeight={"1.3"}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Text>
            </VStack>
        </HStack>
    );
};

export default VolunteerCard;