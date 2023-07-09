import React, {useEffect, useRef} from 'react';
import {Text} from "../../../../_common/text";
import {HStack, VStack} from "../../../../_common/flex-stack";
import {VerticalDropdownMenu} from "../../../../_common/dropdown-menu";
import {Div} from "../../../../_common/custom-image/ui/custom-div.styled";
import {reportsStatuses} from "../../../reports-statuses/reports-statuses";
import {CustomInput} from "../../../../_common/custom-input";
import colors from "../../../../../styles/globals/colors";
import {wasteTypes} from "../../../../../map/model/mapbox-configs";
import {TextArea} from "../../../../_common/text-area";
import {useSelector} from "react-redux";
import {getDynamicInfo} from "../../../../_layout/layout/model/layout.selectors";
import {useResizeTextArea} from "../../../../_common/text-area/model/text-area.hooks";

const ModerationCaseProperties = ({modalForm, changeModalForm}) => {

    const dynamicInfo = useSelector(getDynamicInfo);
    const fullDescriptionRef = useRef(modalForm);
    const announcementRef = useRef(modalForm);

    const announcementLength = modalForm.announcement.length;
    const fullDescriptionLength = modalForm.fullDescription.length;
    const fullDescriptionHeight = fullDescriptionRef?.current?.scrollHeight;
    const announcementHeight = announcementRef?.current?.scrollHeight;

    const resizeParameters = [
        {
            reference: fullDescriptionRef,
            contentLength: fullDescriptionLength
        },
        {
            reference: announcementRef,
            contentLength: announcementLength
        }
    ];

    useResizeTextArea({ resizeParameters });

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
                    modalForm?.hasFullDescription ? (
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
                                width={"auto"}
                                height={"auto"}
                                border={"none"}
                                borderRadius={"8px"}
                                backgroundColor={colors?.middleGrey}
                            >
                                <VStack
                                    justify={"center"}
                                    height={"auto"}
                                    margin={"5px 0"}
                                >
                                    <TextArea
                                        textAreaValue={modalForm?.fullDescription}
                                        width={"100%"}
                                        height={fullDescriptionHeight}
                                        border={"none"}
                                        outline={"none"}
                                        onChangeHandler={
                                            changeModalForm({
                                                changedValue: "fullDescription",
                                                inputType: "input"
                                            })
                                        }
                                        reference={fullDescriptionRef}
                                    />
                                </VStack>
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
                        height={"60px"}
                        margin={"5px 0"}
                    >
                        <Text
                            tag={"h3"}
                            size={"14px"}
                            margin={"8px 0"}
                        >
                            Coordinates
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
                        height={`${announcementHeight}px`}
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
                        height={"60px"}
                        margin={"5px 0"}
                    >
                        <HStack
                            height={"25px"}
                            align={"center"}
                        >
                            <HStack
                                width={"50px"}
                            >
                                <Text
                                    tag={"span"}
                                >
                                    Lat:
                                </Text>
                            </HStack>
                            <CustomInput
                                value={modalForm?.location?.lat}
                                onChange={
                                    changeModalForm({
                                        changedValue: "location",
                                        inputType: "input",
                                        internalProperty: "lat"
                                    })
                                }
                                width={"100%"}
                                height={"100%"}
                                fontSize={"14px"}
                                border={"none"}
                                borderRadius={"8px"}
                                backgroundColor={colors.middleGrey}
                            />
                        </HStack>
                        <HStack
                            height={"25px"}
                            margin={"7px 0 0"}
                            align={"center"}
                        >
                            <HStack
                                width={"50px"}
                            >
                                <Text
                                    tag={"span"}
                                >
                                    Lon:
                                </Text>
                            </HStack>
                            <CustomInput
                                value={modalForm?.location?.lon}
                                onChange={
                                    changeModalForm({
                                        changedValue: "location",
                                        inputType: "input",
                                        internalProperty: "lon"
                                    })
                                }
                                width={"100%"}
                                height={"100%"}
                                fontSize={"14px"}
                                border={"none"}
                                borderRadius={"8px"}
                                backgroundColor={colors.middleGrey}
                            />
                        </HStack>
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"40px"}
                        margin={"5px 0"}
                    >
                        <Div
                            position={"relative"}
                            zIndex={3}
                            width={"100%"}
                            height={"100%"}
                            overflow={"none"}
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
                                buttonHeight={40}
                            />
                        </Div>
                    </VStack>
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
                                items={wasteTypes}
                                selectedProperty={
                                    modalForm?.wasteType ?
                                        modalForm?.wasteType :
                                        "Common waste"
                                }
                                buttonHeight={40}
                                setSelectedProperty={
                                    changeModalForm({
                                        changedValue: "wasteType",
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
                        <Div
                            position={"relative"}
                            zIndex={1}
                            width={"100%"}
                            height={"100%"}
                            overflow={"nones"}
                        >
                            <VerticalDropdownMenu
                                position={"absolute"}
                                items={dynamicInfo?.general_information.communities || []}
                                selectedProperty={
                                    modalForm?.community
                                }
                                buttonHeight={40}
                                setSelectedProperty={
                                    changeModalForm({
                                        changedValue: "community",
                                        inputType: "select"
                                    })
                                }
                            />
                        </Div>
                    </VStack>
                    <VStack
                        justify={"center"}
                        height={"auto"}
                        margin={"5px 0"}
                        background={colors.middleGrey}
                        borderRadius={"8px"}
                    >
                        <TextArea
                            textAreaValue={modalForm?.announcement}
                            width={"100%"}
                            height={announcementHeight}
                            onChangeHandler={
                                changeModalForm({
                                    changedValue: "announcement",
                                    inputType: "input"
                                })
                            }
                            reference={announcementRef}
                            backgroundColor={colors.middleGrey}
                            border={"none"}
                            outline={"none"}
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
                            text={modalForm?.created}
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
                            text={modalForm?.document?.user_name}
                            margin={"8px 0"}
                        />
                    </VStack>
                </VStack>
            </HStack>
        </>
    );
};

export default ModerationCaseProperties;