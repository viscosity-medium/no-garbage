import React from 'react';
import colors from "../../../../../styles/globals/colors";
import {HStack} from "../../../../_common/flex-stack";
import {CustomImage} from "../../../../_common/custom-image";
import {Text} from "../../../../_common/text";

const FilterButton = ({filterName, onClick, visibility}) => {
    return (
        <HStack
            align={"center"}
            justify={"space-between"}
            width={"240px"}
            padding={"8px 15px"}
            background={colors.white}
            border={"2px solid #AFB1B6"}
            borderRadius={"8px"}
            onClick={onClick}
            cursor={"pointer"}
        >
            <HStack
                height={"auto"}
                width={"auto"}
                align={"center"}
            >
                <CustomImage
                    position={"relative"}
                    width={"11px"}
                    height={"13px"}
                    zIndex={2}
                    margin={"0 10px 0 0"}
                    backgroundImage={"/assets/map/profile.svg"}

                />
                <Text
                    tag={"span"}
                    text={filterName}
                />
            </HStack>
            <CustomImage
                position={"relative"}
                backgroundImage={"/assets/common/check-mark.svg"}
                width={"15px"}
                height={"8px"}
                zIndex={1}
                imageTransition={"0.5s"}
                imageRotate={visibility ? "180deg" : "0deg"}
            />
        </HStack>
    );
};

export default FilterButton;