import React, {FC} from 'react';
import {Div} from "../../../_common/custom-image/custom-div.styled";
import colors from "../../../../styles/globals/colors";
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import ModerationCaseProperties from "../case/moderation-case-properties/moderation-case-properties";
import Button from "../../../_common/button/button";
import CustomHr from "../../../_common/custom-hr/custom-hr";
import MeetUp from "../meet-up/meet-up";
import Results from "../results/results";
import {batch, useDispatch, useSelector} from "react-redux";
import CloseBtnImage from "public/assets/common/close-btn.svg"
import {modalActions} from "../modal-slice";
import {getModalContent} from "../modal-selectors";

interface IModalWindowContent {
    visibility: boolean
    modalWindowHeight?: string
}

interface  IPhotoObject {
    url?: string
}
const ModalWindowContent: FC<IModalWindowContent> = ({visibility, modalWindowHeight}) => {
    const right = visibility ? "0" : "-40%";
    const dispatch = useDispatch();
    const content = useSelector(getModalContent)
    const photos = content?.photos?.map((photoObject: any) => photoObject?.url);
    const location = content?.location;
    const onClickBtnHandler = () => {
        batch(()=>{
            dispatch(modalActions.setVisibility());
            dispatch(modalActions.setChosenPhoto(undefined));
        })
    };
    return (
        <Div
            overflow={"scroll"}
            overflowX={"hidden"}
            position={"absolute"}
            zIndex={3}
            zIndexAfter={-1}
            width={"40%"}
            height={modalWindowHeight || "100vh"}
            right={right}
            top={"0"}
            background={colors.white}
        >
            <Button
                position={"absolute"}
                top={"20px"}
                right={"20px"}
                width={"35px"}
                height={"35px"}
                backgroundImage={CloseBtnImage.src}
                handleClick={onClickBtnHandler}
            />
            <VStack
                margin={"40px 0 0"}
                padding={"0 50px"}
            >
                <ModerationCaseProperties/>
                <CustomHr
                    width={"100%"}
                    height={"1px"}
                    backgroundColor={colors.lightGrey}
                    margin={"10px 0 0"}
                />
                <Results
                    photos={photos}
                />
                <CustomHr
                    width={"100%"}
                    height={"1px"}
                    backgroundColor={colors.lightGrey}
                    margin={"5px 0"}
                />
                <MeetUp location={location}/>
            </VStack>
        </Div>
    );
};

export default ModalWindowContent;