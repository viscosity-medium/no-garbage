import React from 'react';
import {HStack} from "../../../../../_common/flex-stack";
import {Text} from "../../../../../_common/text";

const FilterFillerItem = ({fillerItemText}) => {
    return (
        <HStack>
            <Text
                tag={"span"}
                text={fillerItemText}
            />
        </HStack>
    );
};

export default FilterFillerItem;