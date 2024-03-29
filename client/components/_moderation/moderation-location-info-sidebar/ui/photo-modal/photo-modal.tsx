import React from 'react';
import {CustomImage} from "../../../../_common/custom-image";
import {Div} from "../../../../_common/custom-image/ui/custom-div.styled";
import colors from "../../../../../styles/globals/colors";
import {getChosenPhoto} from "../../model/moderation-location-info-sidebar.selectors";
import {useDispatch, useSelector} from "react-redux";
import CloseBtnImage from "public/assets/common/close-btn.svg"
import {Button} from "../../../../_common/button";
import {moderationLocationInfoSidebarSliceActions} from "../../model/moderation-location-info-sidebar.slice";

const PhotoModal = () => {
    const chosenPhoto = useSelector(getChosenPhoto);
    const dispatch = useDispatch();
    const onClickBtnHandler = () => {
        dispatch(moderationLocationInfoSidebarSliceActions.setChosenPhoto(undefined));
    };
    return (
        <Div
            position={"absolute"}
            height={"600px"}
            width={"850px"}
            top={"25%"}
            left={chosenPhoto ? "3.5%" : "-50%"}
            zIndex={2}
            background={colors.white}
            padding={"30px 40px 30px 30px"}
        >
            <Button
                position={"absolute"}
                top={"7px"}
                right={"7px"}
                width={"30px"}
                height={"30px"}
                backgroundColor={colors.white}
                backgroundImage={CloseBtnImage.src}
                onClick={onClickBtnHandler}
                borderRadius={"5px"}
            />
            {
                chosenPhoto ?
                    <CustomImage
                        position={"relative"}
                        width={"100%"}
                        height={"100%"}
                        zIndex={2}
                        backgroundImage={chosenPhoto.preview_image_url}
                    /> : null
            }

        </Div>
    );
};

export default PhotoModal;