import React, {FC} from 'react';
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import CustomImage from "../../../../_common/custom-image/custom-image";
import {useDispatch, useSelector} from "react-redux";
import {moderationLocationInfoSidebarSliceActions} from "../../model/moderation-location-info-sidebar.slice";
import {getChosenPhoto} from "../../model/moderation-location-info-sidebar.selectors";
import colors from "../../../../../styles/globals/colors";
import {Div} from "../../../../_common/custom-image/custom-div.styled";

interface IResults {
    photos?: any[]
}

const ModalPhotoBlock: FC<IResults> = ({photos}) => {

    const dispatch = useDispatch();
    const chosenPhoto = useSelector(getChosenPhoto);
    const loadingGif = "/assets/common/loading-gif.gif";
    
    const clickHandler = (photo) => () => {
        dispatch(moderationLocationInfoSidebarSliceActions.setChosenPhoto(photo));
    };

    return (
        <VStack>
            <CustomImage
                key = {chosenPhoto?.id || ""}
                position={"relative"}
                width={"400px"}
                height={"300px"}
                zIndex={2}
                zIndexBefore={0}
                borderRadius={"8px"}
                backgroundImage={chosenPhoto?.preview_image_url}
                beforeContent={true}
                before={loadingGif}
                backgroundColor={colors.mediumGrey}
            />
            <HStack
                height={"auto"}
                width={"100%"}
                position={"relative"}
                margin={"20px 0"}
                wrap={"wrap"}
            >
                {
                    photos?.map(photo => {
                        return(
                            <Div
                                margin={"10px 10px"}
                                height={"66px"}
                                width={"66px"}
                                position={"relative"}
                                zIndex={1}
                                background={loadingGif}
                            >
                                <CustomImage
                                    key={photo?.preview_image_url}
                                    clickHandler={clickHandler(photo)}
                                    position={"relative"}
                                    zIndex={2}
                                    zIndexBefore={0}
                                    height={"66px"}
                                    width={"66px"}
                                    cursor={"pointer"}
                                    overflow={"hidden"}
                                    beforeContent={true}
                                    before={loadingGif}
                                    backgroundColor={colors.mediumGrey}
                                    backgroundImage={photo?.preview_image_url}
                                    imageTransition={"0.4s"}
                                    imageScale={"1.2"}
                                    borderRadius={"8px"}
                                />
                            </Div>
                        )
                    })
                }
            </HStack>
        </VStack>
    );
};

export default ModalPhotoBlock;