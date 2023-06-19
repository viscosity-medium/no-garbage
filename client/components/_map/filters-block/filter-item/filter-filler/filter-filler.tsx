import React from 'react';
import colors from "../../../../../styles/globals/colors";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import Text from "../../../../_common/text/text";
import CustomCheckbox from "../../../../_common/custom-checkbox/custom-checkbox";

const FilterFiller = ({filterName, fillerOption, map}) => {
    return (
        <HStack
            align={"center"}
            justify={"space-between"}
            width={"100%"}
            padding={"10px 16px 10px"}
            background={colors.white}
        >
            <Text
                tag={"span"}
                text={fillerOption}
            />
            <CustomCheckbox
                id={`${filterName}-${fillerOption}`}
                filterName={filterName}
                fillerOption={fillerOption}
                map={map}
            />
        </HStack>
    );
};

export default FilterFiller;