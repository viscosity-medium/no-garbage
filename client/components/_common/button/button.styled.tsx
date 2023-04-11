import styled from "styled-components";
import {CSSProperties, ReactNode} from "react";

export interface IButton {
    position?: string
    children?: ReactNode
    left?: string,
    right?: string,
    bottom?: string,
    top?: string,
    buttonName?: string
    classes?: string[]
    styles?: CSSProperties
    handleClick?: (e?: any) => void
    backgroundColor?: string
    backgroundColorOnHover?: string
    backgroundImage?: string
    color?: string
    width?: string
    height?: string
    margin?: string
    border?: string
    borderRadius?: string
    size?: string
    lineHeight?: number
    textDecoration?: string
    transition?: string,
    disabled?: boolean
}
const ButtonStyled = styled.button<IButton>`
    position: ${props => props.position};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: contain;
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    cursor: pointer;
    font-style: normal;
    font-weight: ${props => props.lineHeight};
    font-size: ${props => props.size};
    line-height: 1.625;
    color: ${props => props.color};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    margin: ${props => props.margin};
    text-decoration: ${props => props.textDecoration};
    z-index: 5;
    transition: ${props => props.transition};
    outline: none;
    &:hover{
        background-color: ${props => props.backgroundColorOnHover};
    }
`;

export {
    ButtonStyled
}