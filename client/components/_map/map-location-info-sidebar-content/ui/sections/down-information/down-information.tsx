import VStack from "../../../../../_common/flex-stack/v-stack/v-stack";
import Button from "../../../../../_common/button/button";
import colors from "../../../../../../styles/globals/colors";
import React from "react";
import Text from "../../../../../_common/text/text";
import {useSelector} from "react-redux";
import {
    getDataStatus,
    getFilesToUpload,
    getSubmitButtonState, getTextAreaContent, getUserMarkerProperties, getWasteType
} from "../../../model/map-location-info-sidebar.selectors";
import {useAppDispatch} from "../../../../../../store/store";
import {uploadMapFilesToTheServerByChunks} from "../../../model/map-location-info-sidebar.async-thunks";
import {hideLocationSidebar} from "../../../model/helpers/map-location-info-sidebar.helpers";
import {getMapPageUniqueId} from "../../../../../../pages/map/model/map-page.selectors";

const DownInformation = ({map}) => {

    const dispatch = useAppDispatch();
    const filesToUpload = useSelector(getFilesToUpload) as any;
    const sessionUniqueId = useSelector(getMapPageUniqueId) as string;
    const userMarkerProperties = useSelector(getUserMarkerProperties);
    const textAreaValue = useSelector(getTextAreaContent);
    const wasteType = useSelector(getWasteType);
    const dataStatus = useSelector(getDataStatus);

    const amountOfFiles = Object.keys(filesToUpload).length;
    const submitButtonIsDisabled = dataStatus !== "init" || ( dataStatus === "init" && amountOfFiles === 0);
    const windowHeight =  "160px";
    const submitButtonColor = dataStatus !== "pending" && amountOfFiles > 0 ? colors.orange : colors.opaqueOrange;
    const submitButtonText = dataStatus === "pending" ? "Processing..." :
        dataStatus === "success" ? "Reset the form?" :
        dataStatus === "reject" ? "Oops..." :
        dataStatus === "init" && amountOfFiles > 0 ? "Submit" : "Add some files";
    const submitButtonState = useSelector(getSubmitButtonState);
    const marginBottom = ["success", "reject"].includes(dataStatus) ? 20 : 100;

    const submitClick = async () => {

        dispatch(uploadMapFilesToTheServerByChunks({
            filesToUpload,
            dispatch,
            sessionUniqueId,
            userMarkerProperties,
            textAreaValue,
            wasteType
        }));

    };

    return (
        <VStack
            height={windowHeight}
            margin={`25px 0 80px`}
            overflow={"hidden"}
            border={`1px solid ${colors.white}`}
        >
            <VStack
                align={"center"}
                justify={"space-between"}
                position={"absolute"}
                top={submitButtonState.topScroll}
                transition={"0.5s"}
            >
                <VStack
                    height={"auto"}
                >
                    <Button
                        width={"200px"}
                        height={"40px"}
                        color={colors.white}
                        backgroundColor={submitButtonColor}
                        borderRadius={"8px"}
                        margin={`20px 0 ${marginBottom}px`}
                        onClick={submitClick}
                        disabled={submitButtonIsDisabled}
                    >
                        {submitButtonText}
                    </Button>
                </VStack>
                <VStack
                    justify={"center"}
                    align={"center"}
                    height={"auto"}
                >
                    <Text
                        tag={"h3"}
                        size={"16px"}
                        margin={"10px 0 10px"}
                    >
                        Thank you!
                    </Text>
                    <Text
                        tag={"span"}
                        weight={"16px"}
                        margin={"10"}
                    >
                        Our moderators will review the location and if it is accurate it will be added to our interactive map
                    </Text>
                    <Button
                        width={"200px"}
                        height={"40px"}
                        color={colors.white}
                        backgroundColor={submitButtonColor}
                        borderRadius={"8px"}
                        margin={"20px 0 20px"}
                        onClick={hideLocationSidebar({map, dispatch, dataStatus})}
                    >
                        Reset the form?
                    </Button>
                </VStack>
            </VStack>
        </VStack
>
    );
};

export {DownInformation};