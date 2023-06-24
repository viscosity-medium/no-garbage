import { batch, useDispatch } from "react-redux";
import React, { FC, ReactNode } from 'react';
import { moderationLocationInfoSidebarSliceActions } from "../../../_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.slice";
import {
    useResizeLocationInfoSidebar
} from "../../../../pages/map/model/hooks/use-resize-location-info-sidebar";
import colors from "../../../../styles/globals/colors";
import {Div} from "../../custom-image/custom-div.styled";
import {useCloseModalOnEscape} from "../../modal-window/model/modal-window.hooks";

interface LocationInfoSidebarProps {
    children: ReactNode
    visibility: boolean
    modalWindowHeight: string
    setModalWindowHeight: any
    className?: string
}

const LocationInfoSidebar: FC<LocationInfoSidebarProps> = ({
    children,
    visibility,
    modalWindowHeight,
    setModalWindowHeight,
    className
}) => {

    const right = visibility ? "0" : "-460px";
    const dispatch = useDispatch();
    const onEscapeDown = (e) => {
        if( e.key === "Escape" && visibility){
            batch(()=>{
                dispatch(moderationLocationInfoSidebarSliceActions.setVisibility());
                dispatch(moderationLocationInfoSidebarSliceActions.setChosenPhoto(undefined));
            });
        }
    };

    useResizeLocationInfoSidebar({ setModalWindowHeight });
    useCloseModalOnEscape({
        executionFunction: onEscapeDown,
        deps: [visibility]
    });

    return (
        <Div
            overflow={"scroll"}
            overflowX={"hidden"}
            position={"absolute"}
            zIndex={10}
            zIndexAfter={-1}
            width={"460px"}
            height={modalWindowHeight || "100vh"}
            right={right}
            top={"0"}
            borderLeft={`solid 2px ${colors.darkGrey}`}
            background={colors.white}
            className={"sidebar-scroll-inner"}
        >
            {children}
        </Div>
    );
};

export { LocationInfoSidebar };