import React, {useRef} from 'react';
import colors from "../../../../../styles/globals/colors";
import {HStack} from "../../../../_common/flex-stack";
import {Text} from "../../../../_common/text";
import {CustomCheckbox} from "../../../../_common/custom-checkbox";

const FilterFiller = ({filterName, fillerOption}) => {

    const checkboxRef = useRef<any>(null);

    const onButtonClick = (e) => {
        e.stopPropagation();
        checkboxRef?.current?.click();
    };

    return (
        <HStack
            position={"relative"}
            align={"center"}
            justify={"space-between"}
            width={"100%"}
            padding={"10px 16px 10px"}
            background={colors.white}
            onClick={(e) => {onButtonClick(e)}}
            cursor={"pointer"}
        >
            <Text
                tag={"span"}
                text={fillerOption}
            />
            <HStack>
                <HStack
                    position={"absolute"}
                    width={"20px"}
                    height={"20px"}
                    zIndex={10}
                    className={"hiding-div"}
                />
                <CustomCheckbox
                    id={`${filterName}-${fillerOption}`}
                    filterName={filterName}
                    fillerOption={fillerOption}
                    reference={checkboxRef}
                />
            </HStack>
        </HStack>
    );
};

export default FilterFiller;