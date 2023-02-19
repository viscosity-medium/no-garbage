import React, {useEffect, useState} from 'react';
import {ModalWindowStyled} from "./modal-window.styled";
import colors from "../../../../styles/globals/colors";
import ModalWindowContent from "../modal-window-content/modal-window-content";
import {getModalVisibility} from "../modal-selectors";
import {batch, useDispatch, useSelector} from "react-redux";
import {modalActions} from "../modal-slice";
import PhotoModal from "../photo-modal/photo-modal";
import sizes from "../../../../styles/globals/sizes";
import useWindowDimensions from "../../../../hooks/use-window-dimensions";

const ModalWindow = () => {
    const {windowHeight, document, bodyHeight} = useWindowDimensions();
    const [modalWindowHeight, setModalWindowHeight] = useState(0);
    const visibility = useSelector(getModalVisibility);
    const dispatch = useDispatch();
    const onClickHandler = (e) => {
        if(e.target === e.currentTarget){
            batch(()=>{
                dispatch(modalActions.setVisibility());
                dispatch(modalActions.setChosenPhoto(undefined))
            })
        }
    };
    const onEscapeDown = (e) => {
        if(e.key === "Escape"){
            batch(()=>{
                dispatch(modalActions.setVisibility());
                dispatch(modalActions.setChosenPhoto(undefined))
            })
        }
    }

    useEffect(() => {
        if(windowHeight && document && bodyHeight){
            const calculatedHeight = windowHeight > bodyHeight ? windowHeight : bodyHeight;
            setModalWindowHeight(prevState => calculatedHeight);
        }
    },[windowHeight, document, bodyHeight])

    useEffect(() => {
        window.addEventListener("keydown", onEscapeDown, false);
        return () => {
            window.removeEventListener("keydown", onEscapeDown, false);
        };
        // eslint-disable-next-line
    },[]);

    return (
        <ModalWindowStyled
            className={"moderation-modal-window"}
            onClick={onClickHandler}
            background={colors.modalBackground}
            visibility={visibility ? "visible" : "hidden"}
            opacity={visibility ? 1 : 0}
            height={`${modalWindowHeight}px`}
        >
            <PhotoModal/>
            <ModalWindowContent
                visibility={visibility}
                modalWindowHeight={`${modalWindowHeight}px`}
            />
        </ModalWindowStyled>
    );
};

export default ModalWindow;