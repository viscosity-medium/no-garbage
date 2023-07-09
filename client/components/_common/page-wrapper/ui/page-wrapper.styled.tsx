import styled, {keyframes} from "styled-components";
import {ReactNode} from "react";

export interface PageWrapperProps {
    children: ReactNode,
    margin?: string
    isAnimated?: boolean
    backgroundColor?: string
    opacity?: string
}

const pageWrapperAnimation = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`

const PageWrapperStyled = styled.div<PageWrapperProps>`
    width: auto;
    height: auto;
    opacity: ${props => props.opacity};
    background-color: ${props => props.backgroundColor};
    animation-name: ${props => props.isAnimated ? pageWrapperAnimation : null};
    animation-duration: 1s;
`

export {PageWrapperStyled}