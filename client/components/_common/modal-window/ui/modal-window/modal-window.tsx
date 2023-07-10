import React, {useRef} from 'react';
import {createPortal} from "react-dom";
import {useSelector} from "react-redux";
import {onEscapeDown, switchModalWindowVisibility} from "../../model/modal-window.helpers";
import {ModalWindowBackgroundStyled} from "./modal-window-background.styled";
import colors from "../../../../../styles/globals/colors";
import {getModalWindowVisibility} from "../../model/modal-window.selectors";
import {useAppDispatch} from "../../../../../store/store";
import {useCloseModalOnEscape, useSetModalWindowContainerReference} from "../../model/modal-window.hooks";

const ModalWindow: any = ({children}) => {

    const dispatch = useAppDispatch();
    const modalWindowContainer = useRef<Element | null>(null)
    const modalWindowVisibility = useSelector(getModalWindowVisibility);
    const modalOpacity = modalWindowVisibility ? 1 : 0;
    const modalZIndex = modalWindowVisibility ? 20 : -1;

    const hideModalWindowOnModalBackgroundClick = (e) => {
        if(e.target === e.currentTarget){
            switchModalWindowVisibility({dispatch});
        }
    };

    useCloseModalOnEscape({
        executionFunction: onEscapeDown({modalWindowVisibility, dispatch}),
        deps: [modalWindowVisibility]
    });

    useSetModalWindowContainerReference({modalWindowContainer});

    if (modalWindowContainer.current){
        return createPortal(
            <ModalWindowBackgroundStyled
                className={"moderation-moderationLocationInfoSidebarSlice-window"}
                background={colors.modalBackground}
                visibility={"visible"}
                opacity={modalOpacity}
                height={"100vh"}
                width={"100vw"}
                zIndex={modalZIndex}
                onClick={hideModalWindowOnModalBackgroundClick}
            >
                {
                    children
                }
            </ModalWindowBackgroundStyled>,
            modalWindowContainer.current
        );
    }

};

export { ModalWindow };