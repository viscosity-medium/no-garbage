import React, {FC, useEffect, useState} from "react";
import {DropDownMenuProps} from "../../model/dropdown-menu-types";
import {Div} from "../../../custom-image/ui/custom-div.styled";
import colors from "../../../../../styles/globals/colors";
import {HStack} from "../../../flex-stack";
import {Button} from "../../../button";
import {Text} from "../../../text";
import {CustomImage} from "../../../custom-image";
import {CustomHr} from "../../../custom-hr";
import {batch} from "react-redux";
import {VStack} from "../../../flex-stack";
import {useDefineCellTableColor} from "../../../../../hooks/use-define-cell-table-color";
import {useControlDropDown} from "../../model/dropdown-menu.hooks";

const VerticalDropdownMenu: FC<DropDownMenuProps> = ({
    items,
    position,
    selectedProperty,
    setSelectedProperty,
    backgroundColorOnHover,
    buttonHeight = 30
}) => {

    const {
        borderWidth, dropdownState,
        stackLongDimension, elementOpacity,
        switchDropDownState, chooseCurrentItem
    } = useControlDropDown({
        items,
        buttonSideSize: buttonHeight,
        setSelectedProperty
    });

    return (
        <Div
            zIndex={10}
            height={"auto"}
            width={"100%"}
            maxHeight={"unset"}
            minHeight={"unset"}
            position={position}
            border={`solid ${borderWidth}px ${colors.tableCellBorder}`}
            borderRadius={"8px"}
            overflow={"hidden"}
            background={colors.white}
        >
            <VStack
                width={"auto"}
                height={"100%"}
                justify={"center"}
            >
                <Button
                    width={"100%"}
                    height={`${buttonHeight - borderWidth * 2}px`}
                    onClick={switchDropDownState}
                    backgroundColor={
                        useDefineCellTableColor({status: selectedProperty})
                    }
                >
                    <HStack
                        justify={"center"}
                        align={"center"}
                        padding={"0"}
                        width={"100%"}
                    >
                        <Text
                            tag={"span"}
                            text={selectedProperty}
                        />
                        <CustomImage
                            position={"absolute"}
                            right={"15px"}
                            backgroundImage={"/assets/common/check-mark.svg"}
                            width={"12px"}
                            height={"12px"}
                            zIndex={1}
                            imageTransition={"0.5s"}
                            imageRotate={dropdownState ? "180deg" : "0deg"}
                        />
                    </HStack>
                </Button>
                <CustomHr
                    width={"100%"}
                    height={"2px"}
                    backgroundColor={
                        dropdownState ?
                        colors.tableCellBorder :
                        useDefineCellTableColor({status: selectedProperty})
                }
                    opacity={1}
                />
                <VStack
                    justify={"start"}
                    width={"100%"}
                    height={stackLongDimension}
                    transition={"height 0.5s, opacity 0.3s"}
                    opacity={elementOpacity}
                >
                    {
                        items.map((item)=>{
                            return (
                                <Button
                                    key={item}
                                    width={"100%"}
                                    height={`${buttonHeight}px`}
                                    backgroundColor={useDefineCellTableColor({status: item})}
                                    backgroundColorOnHover={backgroundColorOnHover}
                                    onClick={chooseCurrentItem(item)}
                                    transition={"0.5"}
                                >
                                    {item}
                                </Button>)
                        })
                    }
                </VStack>
            </VStack>
        </Div>
    )
}

export {
    VerticalDropdownMenu
}