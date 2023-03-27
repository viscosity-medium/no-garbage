import {DropDownMenuProps} from "../dropdown-menu-types";
import React, {FC, useEffect, useState} from "react";
import {Div} from "../../custom-image/custom-div.styled";
import colors from "../../../../styles/globals/colors";
import HStack from "../../flex-stack/h-stack/h-stack";
import Button from "../../button/button";
import {batch} from "react-redux";
import Text from "../../text/text";
import CustomImage from "../../custom-image/custom-image";
import CustomHr from "../../custom-hr/custom-hr";

const HorizontalDropdownMenu: FC<DropDownMenuProps> = ({
    items,
    selectedProperty,
    setSelectedProperty,
    backgroundColorOnHover
}) => {
    const defaultButtonWidth = "70px";
    const [dropdownState, setDropDownState] = useState<boolean>(false);
    const [stackWidth, setStackWidth] = useState<string>("0");
    const [elementOpacity, setElementOpacity] = useState<number>(0);

    const switchDropDownState = () => {
        setDropDownState(prevState => !prevState);
    }

    const chooseCurrentItem = (item) => () =>{
        batch(()=>{
            setSelectedProperty(item);
            switchDropDownState();
        })
    };

    useEffect(()=>{
        dropdownState ? setStackWidth(`${items.length * 70}px`) : setStackWidth("0");
        dropdownState ? setElementOpacity(1) : setElementOpacity(0);
    },[dropdownState]);

    return(
        <Div
            zIndex={10}
            height={"36px"}
            width={"auto"}
            position={"relative"}
            border={`solid 2px ${colors.tableCellBorder}`}
            borderRadius={"8px"}
            overflow={"hidden"}
        >
            <HStack
                width={"auto"}
                height={"100%"}
                justify={"flex-start"}
            >
                <Button
                    width={"80px"}
                    height={"auto"}
                    handleClick={switchDropDownState}
                >
                    <HStack
                        justify={"space-between"}
                        align={"center"}
                        padding={"0 15px 0 10px"}
                        width={"80px"}
                    >
                        <Text
                            tag={"span"}
                            text={selectedProperty}
                        />
                        <CustomImage
                            position={"relative"}
                            backgroundImage={"/assets/common/check-mark.svg"}
                            width={"12px"}
                            height={"12px"}
                            zIndex={1}
                            imageTransition={"0.5s"}
                            imageRotate={dropdownState ? "90deg" : "-90deg"}
                        />
                    </HStack>
                </Button>
                <CustomHr
                    width={"2px"}
                    backgroundColor={colors.tableCellBorder}
                    opacity={elementOpacity}
                />
                <HStack
                    justify={"flex-start"}
                    width={stackWidth}
                    transition={"width 0.5s, opacity 0.3s"}
                    opacity={elementOpacity}
                >
                    {
                        items.map((item)=>{
                            return (
                                <Button
                                    key={item}
                                    width={defaultButtonWidth}
                                    height={"auto"}
                                    backgroundColorOnHover={backgroundColorOnHover}
                                    handleClick={chooseCurrentItem(item)}
                                    transition={"0.5"}
                                >
                                    {item}
                                </Button>)
                        })
                    }
                </HStack>
            </HStack>
        </Div>
    )
}

export {
    HorizontalDropdownMenu
}