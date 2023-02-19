import React from 'react';
import HStack from "../../../../../_common/flex-stack/h-stack/h-stack";
import Text from "../../../../../_common/text/text";

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