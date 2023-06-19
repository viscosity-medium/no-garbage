import React from 'react';
import Text from "../../../../_common/text/text";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import {VerticalDropdownMenu} from "../../../../_common/dropdown-menu/vertical-dropdown-menu/verticall-dropdown-menu";
import {Div} from "../../../../_common/custom-image/custom-div.styled";
import {reportsStatuses} from "../../../reports-statuses/reports-statuses";
import CustomInput from "../../../../_common/custom-input/custom-input";
import colors from "../../../../../styles/globals/colors";
import TextArea from "../../../../_common/text-area/text-area";

const ModerationCaseProperties = ({modalForm, changeModalForm}) => {


    return (
        <>
            <VStack
                justify={"center"}
                height={"auto"}
                margin={"5px 0"}
            >
                <CustomInput
                    value={modalForm?.description || ""}
                    onChange={
                        changeModalForm({
                            changedValue: "description",
                            inputType: "input"
                        })
                    }
                    width={"100%"}
                    height={"40px"}
                    fontSize={"16px"}
                    border={"none"}
                    borderRadius={"8px"}
                    backgroundColor={colors.middleGrey}
                />
                {
                    modalForm?.fullDescription ? (
                        <VStack>
                            <Text
                                tag={"h3"}
                                size={"14px"}
                                margin={"18px 0 0"}
                            >
                                User description
                            </Text>
                            <Div
                                position={"relative"}
                                zIndex={2}
                                margin={"10px 0"}
                                padding={"10px"}
                                width={"auto"}
                                height={"auto"}
                                border={"none"}
                                borderRadius={"8px"}
                                backgroundColor={colors?.middleGrey}
                            >
                                <Text
                                    tag={"span"}
                                    text={modalForm?.fullDescription}
                                    color={colors?.darkGrey}
                                    size={"14px"}
                                    lineHeight={"1"}
                                />
                            </Div>
                        </VStack>
                    ) : <></>
                }
            </VStack>
            <HStack
                position={"relative"}
                margin={"20px 0 8px"}
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
                            size={"14px"}
                            margin={"8px 0"}
                        >
                            Status
                        </Text>
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            size={"14px"}
                            margin={"8px 0"}
                        >
                            Waste type
                        </Text>
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            size={"14px"}
                            margin={"8px 0"}
                        >
                            Community
                        </Text>
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            size={"14px"}
                            margin={"8px 0"}
                        >
                            Announcement
                        </Text>
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            size={"14px"}
                            margin={"8px 0"}
                        >
                            Date Added
                        </Text>
                    </VStack>
                    {
                        modalForm?.dateModified ? (
                            <VStack
                                justify={"center"}
                                height={"40px"}
                                margin={"5px 0"}
                            >
                                <Text
                                    tag={"h3"}
                                    size={"14px"}
                                    margin={"8px 0"}
                                >
                                    Date Modified
                                </Text>
                            </VStack>
                        ) : <></>
                    }
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            size={"14px"}
                            margin={"8px 0"}
                        >
                            Reported by
                        </Text>
                    </VStack>
                </VStack>
                <VStack
                    width={"100%"}
                    margin={"0 0 0 20px"}
                >
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Div
                            position={"relative"}
                            zIndex={2}
                            width={"100%"}
                            height={"100%"}
                            overflow={"nones"}
                        >
                            <VerticalDropdownMenu
                                position={"absolute"}
                                items={reportsStatuses}
                                selectedProperty={modalForm?.status}
                                setSelectedProperty={
                                    changeModalForm({
                                        changedValue: "status",
                                        inputType: "select"
                                    })
                                }
                            />
                        </Div>
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <CustomInput
                            value={
                                modalForm?.wasteType ?
                                    modalForm?.wasteType :
                                    "Common waste"
                            }
                            onChange={
                                changeModalForm({
                                    changedValue: "wasteType",
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
                            value={modalForm?.community}
                            onChange={
                                changeModalForm({
                                    changedValue: "community",
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
                            value={modalForm?.announcement}
                            onChange={
                                changeModalForm({
                                    changedValue: "announcement",
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
                        <Text
                            tag={"span"}
                            size={"14px"}
                            text={modalForm?.dateAdded}
                            margin={"8px 0"}
                        />
                    </VStack>
                    {
                        modalForm?.dateModified ? (
                            <VStack
                                justify={"center"}
                                height={"40px"}
                                margin={"5px 0"}
                            >
                                <Text
                                    tag={"span"}
                                    size={"14px"}
                                    text={modalForm?.dateModified}
                                    margin={"8px 0"}
                                />
                            </VStack>
                        ) : <></>

                    }
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"span"}
                            size={"14px"}
                            text={modalForm?.userName}
                            margin={"8px 0"}
                        />
                    </VStack>


                </VStack>
            </HStack>
        </>
    );
};

export default ModerationCaseProperties;