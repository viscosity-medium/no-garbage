import React from 'react';
import VStack from "../../_common/flex-stack/v-stack/v-stack";
import Text from "../../_common/text/text";

const TitleBlock = () => {
    return (
        <VStack
            width={"752px"}
            height={"130px"}
            justify={"space-between"}
        >
            <Text
                tag={"h3"}
                text={"Submit your location for future cleanups "}

            />
            <Text
                position={"relative"}
                left={"32px"}
                tag={"span"}
                text={"Our moderators will review the location and if it is accurate it will be added to our interactive add-location"}
                size={"24px"}
            />
        </VStack>
    );
};

export default TitleBlock;