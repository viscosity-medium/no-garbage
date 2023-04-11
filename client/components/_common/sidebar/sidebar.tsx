import React, {FC, ReactNode} from 'react';
import {ISidebar, StyledSidebar} from "./sidebar.styled";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import {useDefineSidebarSizes} from "../../../hooks/use-define-sidebar-sizes";

interface ISideBarComponent extends ISidebar {
    children?: ReactNode
    sidebarType: string
}
const Sidebar:FC<ISideBarComponent> = ({
    children,
    position,
    top,
    left,
    right,
    bottom ,
    color,
    sidebarWidth,
    sidebarType
}) => {

    const { windowHeight, document, bodyHeight } = useWindowDimensions();
    const { calculatedWidth, calculatedHeight, changeSidebarWidth } = useDefineSidebarSizes({
        sidebarType: sidebarType, sidebarWidth, windowHeight, document, bodyHeight
    });


    return (
        <StyledSidebar
            position={position}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            onMouseEnter={changeSidebarWidth}
            onMouseLeave={changeSidebarWidth}
            sidebarHeight={calculatedHeight}
            sidebarWidth={calculatedWidth}
            color={color}
        >
            {children}
        </StyledSidebar>
    );

};

export default Sidebar;