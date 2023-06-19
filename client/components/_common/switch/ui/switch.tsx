import React, {FC} from 'react';
import Button from "../../button/button";
import HStack from "../../flex-stack/h-stack/h-stack";
import colors from "../../../../styles/globals/colors";
import VStack from "../../flex-stack/v-stack/v-stack";
import Text from "../../text/text";
import {Div} from "../../custom-image/custom-div.styled";
import {useSelector} from "react-redux";
import {getWasteType} from "../../../_map/map-location-info-sidebar-content/model/map-location-info-sidebar.selectors";
import {useAppDispatch} from "../../../../store/store";
import {
    locationInfoSidebarActions
} from "../../../_map/map-location-info-sidebar-content/model/map-location-info-sidebar.slice";

interface SwitchProps {
    items: string[]
}

const Switch: FC<SwitchProps> = ({items}) => {

    const wasteType = useSelector(getWasteType);
    const dispatch = useAppDispatch();

    return (
        <VStack
            margin={"10px 0 0"}
        >
            {
                items.map((item, index)=>{

                    const changeButtonColor = (e) => {
                        dispatch(locationInfoSidebarActions.setWasteType(item));
                    };

                    const color = wasteType === item ? colors.pastelGray : colors.white;

                    return (
                        <React.Fragment
                            key={`${item}=${index}`}
                        >
                            <HStack
                                align={"center"}
                                margin={"2px 0"}
                                cursor={"pointer"}
                                onClick={changeButtonColor}
                            >
                                <Button
                                    position={"relative"}
                                    width={"20px"}
                                    height={"20px"}
                                    borderRadius={"50px"}
                                    border={`1px solid ${colors.opaqueBlack}`}
                                    transition={"0.3s"}
                                >
                                    <HStack
                                        align={"center"}
                                        justify={"center"}
                                        height={"100%"}
                                        width={"100%"}
                                    >
                                        <Div
                                            zIndex={2}
                                            height={"10px"}
                                            width={"10px"}
                                            borderRadius={"50%"}
                                            backgroundColor={color}
                                            position={"relative"}
                                        />
                                    </HStack>
                                </Button>
                                <Text
                                    tag={"span"}
                                    margin={"0 0 0 8px"}
                                    text={item}
                                    size={"12px"}
                                />
                            </HStack>
                        </React.Fragment>
                    )
                })
            }
            <HStack
                margin={"5px 0 0"}
            >
                <Text
                    tag={"span"}
                    size={"14px"}
                    color={"rgba(0,0,0, 0.6)"}
                >
                    {"Please choose the garbage type"}
                </Text>
            </HStack>
        </VStack>
    );
};

export {
    Switch
};