import React from 'react';
import {StyledSection} from "../../_main/promo-section/promo.styled";
import VStack from "../../_common/flex-stack/v-stack/v-stack";
import Text from "../../_common/text/text";
import HStack from "../../_common/flex-stack/h-stack/h-stack";
import {wasteTypes} from "./waste-types";
import Button from "../../_common/button/button";
import {useSelector} from "react-redux";
import {wasteBlockActions} from "./waste-block-slice";
import {getChosenWasteType} from "./waste-types-selectors";
import colors from "../../../styles/globals/colors";
import {useAppDispatch} from "../../../store/store";

const WasteBlock = () => {
    const chosenType = useSelector(getChosenWasteType);
    const dispatch = useAppDispatch();
    const wasteTypeButtonHandler = (type) => () => {
        dispatch(wasteBlockActions.setChosenWasteType(type))
    };
    return (
        <StyledSection
            margin={"59px 0 0"}
        >
            <VStack
            >
                <Text
                    tag={"span"}
                    text={"Select type of waste"}
                    size={"24px"}
                />
                <HStack
                    margin={"41px 0 0"}
                    padding={"0 0 0 32px"}
                    width={"940px"}
                    wrap={"wrap"}
                >
                    {
                        wasteTypes.map(type => {
                            const backgroundColor = type === chosenType ?
                                colors.wasteBtnColor : colors.wasteBtnPaleColor;
                            return(
                                <Button
                                    key={type}
                                    width={"167px"}
                                    height={"40px"}
                                    buttonName={type}
                                    color={colors.white}
                                    handleClick={wasteTypeButtonHandler(type)}
                                    margin={"0 24px 20px 0"}
                                    borderRadius={"16px"}
                                    backgroundColor={backgroundColor}
                                />
                            )
                        })
                    }
                </HStack>
            </VStack>

        </StyledSection>
    );
};

export default WasteBlock;