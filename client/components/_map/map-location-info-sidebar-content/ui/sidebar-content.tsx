import {VStack, HStack} from "../../../_common/flex-stack";
import colors from "../../../../styles/globals/colors";
import {Button} from "../../../_common/button";
import CrossIcon from "public/assets/common/cross-icon.svg"
import {Div} from "../../../_common/custom-image/ui/custom-div.styled";
import {useAppDispatch} from "../../../../store/store";
import {StepBlock} from "./sections/step-block";
import {useSelector} from "react-redux";
import {getDataStatus, getUserMarkerProperties} from "../model/map-location-info-sidebar.selectors";
import {StepOne} from "./sections/step-one/step-one";
import {StepTwo} from "./sections/step-two/step-two";
import {StepThree} from "./sections/step-three/step-three";
import {DownInformation} from "./sections/down-information/down-information";
import {hideLocationSidebar} from "../model/helpers/map-location-info-sidebar.helpers";
import React from "react";
import {UpperInformation} from "./sections/upper-information/upper-information";

const SidebarContent = ({map}) => {

    const dataStatus = useSelector(getDataStatus);
    const userMarkerProperties = useSelector(getUserMarkerProperties);
    const locationName = userMarkerProperties.name;
    const coordinatesString = userMarkerProperties.coordinates.toString().replace(/,/,", ");
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
                        onClick={hideLocationSidebar({map, dispatch, dataStatus})}
                    >
                        <CrossIcon/>
                    </Button>
                </HStack>
            </Div>
            <UpperInformation/>
            <StepBlock
                title={"Step 1"}
                description={"Location details"}
            >
                <StepOne
                    coordinatesString={coordinatesString}
                    locationName={locationName}
                />
            </StepBlock>
            <StepBlock
                title={"Step 2"}
                description={"Upload relevant media"}
            >
                <StepTwo/>
            </StepBlock>
            <StepBlock
                title={"Step 3"}
                description={"Describe the location"}
            >
                <StepThree/>
            </StepBlock>
            <DownInformation
                map={map}
            />
        </VStack>
    );
};

export {SidebarContent};