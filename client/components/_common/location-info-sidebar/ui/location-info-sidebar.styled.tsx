import styled from "styled-components";
import colors from "../../../../styles/globals/colors";
import {ReactNode} from "react";

interface LocationInfoSidebarStyledProps {
    modalWindowHeight: string | number
    right: string

    children?: ReactNode
}

export const LocationInfoSidebarStyled = styled.aside<LocationInfoSidebarStyledProps>`
    overflow: scroll;
    overflow-X: hidden;
    position: absolute;
    z-index: 12;
    width: 460px;
    height: ${props => props.modalWindowHeight || "100vh"};
    right: ${props => props.right};
    top: 0;
    border-left: ${`solid 2px ${colors.darkGrey}`};
    background: ${colors.white};
    transition: 0.3s
`;