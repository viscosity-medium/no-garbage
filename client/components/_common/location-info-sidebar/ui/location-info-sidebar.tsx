import { batch, useDispatch } from "react-redux";
import React, { FC, ReactNode } from 'react';
import { moderationLocationInfoSidebarSliceActions } from "../../../_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.slice";
import {
    useResizeLocationInfoSidebar
} from "../../../../pages-models/map/model/hooks/use-resize-location-info-sidebar";
import colors from "../../../../styles/globals/colors";
import {Div} from "../../custom-image/ui/custom-div.styled";
import {useCloseModalOnEscape} from "../../modal-window/model/modal-window.hooks";
import {LocationInfoSidebarStyled} from "./location-info-sidebar.styled";

interface LocationInfoSidebarProps {
    children: ReactNode
    visibility: boolean
    modalWindowHeight: string
    setModalWindowHeight: any
    className?: string
    onEscapeFunction: () => void
}

const LocationInfoSidebar: FC<LocationInfoSidebarProps> = ({
    children,
    visibility,
    modalWindowHeight,
    setModalWindowHeight,
    onEscapeFunction,
}) => {

    const right = visibility ? "0" : "-460px";
    const onEscapeDown = (e) => {
        if( e.key === "Escape" && visibility){
            onEscapeFunction()
        }
    };

    useResizeLocationInfoSidebar({ setModalWindowHeight });
    useCloseModalOnEscape({
        executionFunction: onEscapeDown,
        deps: [visibility]
    });

    return (
        <LocationInfoSidebarStyled
            modalWindowHeight={modalWindowHeight}
            right={right}
        >
            {children}
        </LocationInfoSidebarStyled>

    );
};

export { LocationInfoSidebar };