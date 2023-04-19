import React from 'react';
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import Text from "../../../../_common/text/text";
import Mapbox from "../../../../../map/ui/mapbox";
import {Div} from "../../../../_common/custom-image/custom-div.styled";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import colors from "../../../../../styles/globals/colors";
import CustomInput from "../../../../_common/custom-input/custom-input";

interface IMeetIp {
    location?: any
}
const MeetUp = ({location, modalForm, changeModalForm}) => {
    return (
        <VStack
            margin={"20px 0 0"}
        >
            <Text
                tag={"h3"}
                text={"Meet-up"}
                size={"16px"}
            />
            <HStack
                position={"relative"}
                margin={"10px 0"}
            >
                <VStack
                    position={"relative"}
                    width={"40%"}
                    grow={0}
                >
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            text={"Date"}
                            size={"14px"}
                            margin={"8px 0"}
                        />
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            text={"Time"}
                            size={"14px"}
                            margin={"8px 0"}
                        />
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            text={"Location"}
                            size={"14px"}
                            margin={"8px 0"}
                        />
                    </VStack>
                </VStack>
                <VStack
                    position={"relative"}
                    width={"100%"}
                    margin={"0 0 0 20px"}
                >
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <CustomInput
                            value={modalForm.meetUpDate}
                            onChange={
                                changeModalForm("meetUpDate")
                            }
                            width={"100%"}
                            height={"100%"}
                            fontSize={"14px"}
                            border={"none"}
                            borderRadius={"8px"}
                            backgroundColor={colors.middleGrey}
                        />
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <CustomInput
                            value={modalForm.meetUpTime}
                            onChange={
                                changeModalForm("meetUpTime")
                            }
                            width={"100%"}
                            height={"100%"}
                            fontSize={"14px"}
                            border={"none"}
                            borderRadius={"8px"}
                            backgroundColor={colors.middleGrey}
                        />
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <CustomInput
                            value={modalForm.meetUpDescription}
                            onChange={
                                changeModalForm("meetUpDescription")
                            }
                            width={"100%"}
                            height={"100%"}
                            fontSize={"14px"}
                            border={"none"}
                            borderRadius={"8px"}
                            backgroundColor={colors.middleGrey}
                        />
                    </VStack>
                </VStack>
            </HStack>

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