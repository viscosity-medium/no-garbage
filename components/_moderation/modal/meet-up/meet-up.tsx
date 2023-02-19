import React from 'react';
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import Text from "../../../_common/text/text";
import Mapbox from "../../../_map/mapbox/mapbox";
import {Div} from "../../../_common/custom-image/custom-div.styled";

interface IMeetIp {
    location?: any
}
const MeetUp = ({location}) => {
    return (
        <VStack>
            <Text
                tag={"h3"}
                text={"Meet-up"}
                size={"26px"}
            />
            <Text tag={"span"} text={"June 18th, 2022, 17:45, Didube metro station"}/>
            <Div
                zIndex={5}
                height={"400px"}
                width={"100%"}
                position={"relative"}
                margin={"20px 0"}
                zIndexAfter={-1}
            >
                <Mapbox
                    size={"100%"}
                    lngProp={location?.lng}
                    latProp={location?.lat}
                    zoomProp={15}
                />
            </Div>
        </VStack>
    );
};

export default MeetUp;