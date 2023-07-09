import React, {FC, useRef} from 'react';
import {Text} from "../../../../_common/text";
import {Mapbox} from "../../../../../map/ui";
import {Div} from "../../../../_common/custom-image/ui/custom-div.styled";
import {HStack, VStack} from "../../../../_common/flex-stack";
import colors from "../../../../../styles/globals/colors";
import {CustomInput} from "../../../../_common/custom-input";
import {ModalForm} from "../../model/moderation-location-info-sidebar.types";

interface MeetUpProps {
    location?: any
    modalForm: ModalForm
    changeModalForm: any
}
const MeetUp: FC<MeetUpProps> = ({location, modalForm, changeModalForm}) => {

    const upperLevelMapCopy = useRef();

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
                            value={modalForm?.meetUpDate}
                            onChange={
                                changeModalForm({
                                    changedValue: "meetUpDate",
                                    inputType: "input"
                                })
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
                            value={modalForm?.meetUpTime}
                            onChange={
                                changeModalForm({
                                    changedValue: "meetUpTime",
                                    inputType: "input"
                                })
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
                            value={modalForm?.meetUpDescription}
                            onChange={
                                changeModalForm({
                                    changedValue: "meetUpDescription",
                                    inputType: "input"
                                })
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
                    lngProp={location?.lon}
                    latProp={location?.lat}
                    zoomProp={15}
                    upperLevelMapCopy={upperLevelMapCopy}
                    interactivity={false}
                />
            </Div>
        </VStack>
    );
};

export default MeetUp;