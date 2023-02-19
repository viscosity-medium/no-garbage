import React, {FC} from 'react';
import Text from "../text/text";
import CustomImage from "../custom-image/custom-image";
import HStack from "../flex-stack/h-stack/h-stack";
import EngImg from "public/assets/common/lang/eng.svg";
import {Listbox} from "@headlessui/react";
import cls from "./custom-select.module.scss"

interface ICustomSelect {
    selectImgObject?: any
    selectedProperty: string
    setSelectedProperty: any
    additionalAction?: any
    clear?: boolean
    types: any
    orientation?: string
}

type TListBoxHandler = (chosenValue: string) => void ;

const CustomSelect: FC<ICustomSelect> = ({
    selectedProperty,
    setSelectedProperty,
    additionalAction,
    clear,
    selectImgObject,
    types,
    orientation = "bottom"
}) => {
    const listBoxHandler: TListBoxHandler = (chosenValue) => {
        setSelectedProperty(chosenValue);
        additionalAction ? additionalAction(chosenValue) : null;
    }
    const position = cls[`${orientation}`]
    return (
        <Listbox
            onChange={(chosenValue)  =>
                listBoxHandler(chosenValue)
            }
            value={selectedProperty}
            as={"div"}
            className={cls['wrapper-div']}
        >
            <Listbox.Button
                className={`${cls.button} ${clear && cls.clear}`}
            >
                <HStack
                    align={"center"}
                    justify={"space-around"}
                    width={"134px"}
                >
                    {
                        selectImgObject ?
                            <CustomImage
                                position={"relative"}
                                width={"25px"}
                                height={"25px"}
                                zIndex={2}
                                margin={"0 0 0 5px"}
                                backgroundImage={selectImgObject[selectedProperty] || EngImg}
                            /> : null
                    }
                    <Text
                        tag={"span"}
                        text={types?.[selectedProperty]}
                    />
                    <CustomImage
                        position={"relative"}
                        backgroundImage={"/assets/common/check-mark.svg"}
                        width={"15px"}
                        height={"8px"}
                        zIndex={1}
                    />
                </HStack>
            </Listbox.Button>
            <Listbox.Options className={`${cls.options} ${position}`}>
                {Object.keys(types)?.map((keyStr) => (
                    <Listbox.Option
                        key={types[keyStr]}
                        value={keyStr}
                        className={cls.option}
                    >
                        <HStack
                            align={"center"}
                            justify={"space-around"}
                            width={"134px"}
                        >
                            <Text
                                tag={"span"}
                                text={types[keyStr]}
                            />
                        </HStack>
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
};

export default CustomSelect;