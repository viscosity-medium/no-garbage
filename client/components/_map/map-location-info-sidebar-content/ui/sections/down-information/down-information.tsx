import VStack from "../../../../../_common/flex-stack/v-stack/v-stack";
import Button from "../../../../../_common/button/button";
import colors from "../../../../../../styles/globals/colors";
import React from "react";
import Text from "../../../../../_common/text/text";
import {useSelector} from "react-redux";
import {getFilesToUpload, getSubmitButtonState} from "../../../model/map-location-info-sidebar.selectors";
import {useAppDispatch} from "../../../../../../store/store";
import {fetchFilesByChunks} from "../../../model/helpers/map-files-handler.helper";

const DownInformation = () => {
    const dispatch = useAppDispatch();
    const filesToUpload = useSelector(getFilesToUpload) as any;
    const submitButtonState = useSelector(getSubmitButtonState);

    const submitClick = async () => {

        await fetchFilesByChunks({files: filesToUpload})

        // dispatch(uploadMapFilesToTheServer({filesToUpload}));
        // dispatch(locationInfoSidebarActions.setSaveButtonState({topScroll: "-80px"}));
    }

    return (
        <VStack
            height={"80px"}
            margin={"40px 0"}
            overflow={"hidden"}
        >
            <VStack
                align={"center"}
                justify={"space-between"}
                position={"absolute"}
                top={submitButtonState.topScroll}
                transition={"0.5s"}
            >
                <VStack
                    height={"80px"}
                >
                    <Button
                        width={"200px"}
                        height={"40px"}
                        color={colors.white}
                        backgroundColor={colors.orange}
                        borderRadius={"8px"}
                        margin={"20px 0 20px"}
                        onClick={submitClick}
                    >
                        Submit
                    </Button>
                </VStack>
                <VStack
                    justify={"center"}
                    align={"center"}
                    height={"80px"}
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
                </VStack>
            </VStack>
        </VStack>
    );
};

export {DownInformation};