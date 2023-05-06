import styled from "styled-components";
import {ReactNode} from "react";

export interface IStack {
    position?: "absolute" | "relative"
    justify?: "space-between" | "space-around" | "center" | "flex-start" | "flex-end" | "start" | "end"
    align?: "center" | "flex-start" | "flex-end" | "self-start" | "self-end" | "start" | "end"
    overflow?: string
    children?: ReactNode
    onClick?: (e: any) => void
    width?: string
    height?: string
    margin?: string
    padding?: string
    textAlign?: string
    background?: string
    border?: string
    borderRadius?: string
    wrap?: string
    grow?: number
    cursor?: string
    opacity?: string | number
    transition?: string
    top?: string
    zIndex?: number
}

const HStackStyled = styled.div<IStack>`
    position: ${props => props.position};
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    overflow: ${props => props.overflow};
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    text-align: ${props => props.textAlign};
    background: ${props => props.background};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    box-sizing: border-box;
    flex-wrap: ${props => props.wrap};
    flex-grow: ${props => props.wrap};
    cursor: ${props => props.cursor};
    opacity: ${props => props.opacity};
    z-index: ${props => props.zIndex};
    transition: ${props => props.transition};
`

export default HStackStyled