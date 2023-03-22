import React from 'react';
import Text from "../../../../_common/text/text";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import {useSelector} from "react-redux";
import {getModalContent} from "../../modal-selectors";
import TableCellContentWrapper
    from "../../../data-table/table-cell/table-cell-content-wrapper/table-cell-content-wrapper";
import {useDefineCellTableColor} from "../../../../../hooks/use-define-cell-table-color";
import {VerticalDropdownMenu} from "../../../../_common/dropdown-menu/vertical-dropdown-menu/verticall-dropdown-menu";
import {Div} from "../../../../_common/custom-image/custom-div.styled";
import {reportsStatuses} from "../../../reports-statuses/reports-statuses";
import CustomInput from "../../../../_common/custom-input/custom-input";
import colors from "../../../../../styles/globals/colors";

const ModerationCaseProperties = ({modalForm, changeModalForm}) => {

    return (
        <>

            <VStack
                justify={"center"}
                height={"40px"}
                margin={"5px 0"}
            >
                <CustomInput
                    value={modalForm.description}
                    onChange={
                        changeModalForm("description")
                    }
                    width={"100%"}
                    height={"100%"}
                    fontSize={"16px"}
                    border={"none"}
                    borderRadius={"8px"}
                    backgroundColor={colors.middleGrey}
                />
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
                            text={"Status"}
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
                            text={"Community"}
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
                            text={"Announcement"}
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
                            text={"Date Added"}
                            size={"14px"}
                            margin={"8px 0"}
                        />
                    </VStack>
                    {
                        modalForm.dateModified ? (
                            <VStack
                                justify={"center"}
                                height={"40px"}
                                margin={"5px 0"}
                            >
                                <Text
                                    tag={"h3"}
                                    text={"Date Modified"}
                                    size={"14px"}
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
                            tag={"h3"}
                            text={"Reported by"}
                            size={"14px"}
                            margin={"8px 0"}
                        />
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
                                selectedProperty={modalForm.status}
                                setSelectedProperty={
                                    changeModalForm("status")
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
                            value={modalForm.community}
                            onChange={
                                changeModalForm("community")
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
                            value={modalForm.announcement}
                            onChange={
                                changeModalForm("announcement")
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
                            text={modalForm.dateAdded}
                            margin={"8px 0"}
                        />
                    </VStack>
                    {
                        modalForm.dateModified ? (
                            <VStack
                                justify={"center"}
                                height={"40px"}
                                margin={"5px 0"}
                            >
                                <Text
                                    tag={"span"}
                                    size={"14px"}
                                    text={modalForm.dateModified}
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
                            text={modalForm.userName}
                            margin={"8px 0"}
                        />
                    </VStack>


                </VStack>
            </HStack>
        </>
    );
};

export default ModerationCaseProperties;