import React from 'react';
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import HStack from "../../../_common/flex-stack/h-stack/h-stack";
import Text from "../../../_common/text/text";
import CustomInput from "../../../_common/custom-input/custom-input";
import {useSelector} from "react-redux";
import {getUserMarkerCoordinates} from "../model/map-location-info-sidebar.selectors";

const LocationInputItem = ({title, inputValue}) => {

    return (
        <VStack>
            <HStack>
                <Text
                    tag={"span"}
                    size={"16px"}
                >
                    {title}
                </Text>
            </HStack>
            <CustomInput
                value={inputValue}
                fontSize={"16px"}
                width={"100%"}
            />
        </VStack>
    );
};

export default LocationInputItem;