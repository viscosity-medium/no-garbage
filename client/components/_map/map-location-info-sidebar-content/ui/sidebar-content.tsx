import React from 'react';
import UpperInformation from "./upper-information";
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import colors from "../../../../styles/globals/colors";
import HStack from "../../../_common/flex-stack/h-stack/h-stack";
import Button from "../../../_common/button/button";
import CrossIcon from "public/assets/common/cross-icon.svg"
import {Div} from "../../../_common/custom-image/custom-div.styled";
import {useAppDispatch} from "../../../../store/store";
import {StepBlock} from "./step-block";
import LocationInputItem from "./location-input-item";
import {hideLocationSidebar} from "../model/map-location-info-sidebar.helpers";

const SidebarContent = ({map}) => {
    const dispatch = useAppDispatch();
    return (
        <VStack
            position={"relative"}
            padding={"0 30px"}
        >
            <Div
                position={"sticky"}
                top={"0"}
                width={"388px"}
                height={"auto"}
                zIndex={3}
                background={colors.white}
            >
                <HStack
                    width={"100"}
                >
                    <Button
                        position={"relative"}
                        right={"0px"}
                        width={"20px"}
                        height={"20px"}
                        border={"0 solid #000"}
                        margin={"20px 0 15px auto"}
                        handleClick={hideLocationSidebar({map, dispatch})}
                    >
                        <CrossIcon/>
                    </Button>
                </HStack>
            </Div>
            <UpperInformation/>
            <StepBlock title={"Step 1"} description={"Location details"}>
                <LocationInputItem/>
            </StepBlock>
            <StepBlock title={"Step 2"} description={"Upload relevant media"}>
                <></>
            </StepBlock>
            <StepBlock title={"Step 3"} description={"Describe the location"}>
                <></>
            </StepBlock>
        </VStack>
    );
};

export {SidebarContent};