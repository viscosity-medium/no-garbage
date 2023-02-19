import React from 'react';
import VStack from "../../_common/flex-stack/v-stack/v-stack";
import Text from "../../_common/text/text";
import {Div} from "../../_common/custom-image/custom-div.styled";
import Mapbox from "../../_map/mapbox/mapbox";

const InteractiveMap = () => {
    return (
        <VStack
            margin={"48px 0 0"}
        >
            <Text
                tag={"span"}
                text={"Pick a point on the add-location"}
                size={"24px"}
            />
            <Div
                width={"720px"}
                height={"417px"}
                zIndex={1}
                zIndexAfter={-1}
                position={"relative"}
                margin={"24px 0 0 32px"}
            >
                <Mapbox
                    size={"100%"}/>
            </Div>
        </VStack>
    );
};

export default InteractiveMap;