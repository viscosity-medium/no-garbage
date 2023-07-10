import styled from "styled-components";
import {ReactNode} from "react";

export interface MainProps {
    children?: ReactNode
}

export const MainStyled = styled.main<MainProps>`
    z-index: 2;
    height: 100%;
    width: 100%;
    position: relative;
`;