import React, {FC} from 'react';
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import CustomImage from "../../../../_common/custom-image/custom-image";
import {useDispatch, useSelector} from "react-redux";
import {modalActions} from "../../model/modal.slice";
import {getChosenPhoto} from "../../model/modal-selectors";
import colors from "../../../../../styles/globals/colors";

interface IResults {
    photos?: any[]
}
const ModalPhotoBlock: FC<IResults> = ({photos}) => {

    const dispatch = useDispatch();
    const chosenPhoto = useSelector(getChosenPhoto);
    const clickHandler = (photo) => () => {
        dispatch(modalActions.setChosenPhoto(photo));
    }

    return (
        <VStack>
            <CustomImage
                position={"relative"}
                width={"400px"}
                height={"300px"}
                zIndex={2}
                borderRadius={"8px"}
                backgroundImage={ chosenPhoto }
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
                            <CustomImage
                                key={photo?.url}
                                clickHandler={clickHandler(photo?.url)}
                                margin={"10px 10px"}
                                position={"relative"}
                                zIndex={2}
                                zIndexAfter={0}
                                height={"66px"}
                                width={"66px"}
                                cursor={"pointer"}
                                overflow={"hidden"}
                                backgroundColor={colors.mediumGrey}
                                backgroundImage={photo?.preview_image_url}
                                imageTransition={"0.4s"}
                                imageScale={"1.2"}
                                borderRadius={"8px"}
                            />
                        )
                    })
                }
            </HStack>
        </VStack>
    );
};

export default ModalPhotoBlock;