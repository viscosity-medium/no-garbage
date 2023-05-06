import styled, {keyframes} from "styled-components";
import colors from "../../../styles/globals/colors";

export interface IStyledWrapper {
    position: string
    overflow?:string
    overflowX?:string
    overflowY?:string
    zIndex: number
    width: string
    height: string
    left?: string
    right?: string
    bottom?: string
    top?: string
    after?: string
    before?: any
    zIndexAfter?: string | number
    zIndexBefore?: string | number
    afterContent?: boolean
    beforeContent?: boolean
    hover?: string
    scale?: boolean
    margin?: string
    padding?: string
    cursor?: string
    initScale?: string
    background?: string
    backgroundColor?: string
    border?: string
    borderLeft?: string
    borderRadius?: string
    textAlign?: string
    maxHeight?: string
    minHeight?: string
    boxShadow?: string
    transition?: string
}

export const Div = styled.div<IStyledWrapper>`
    overflow: ${props => props.overflow};
    overflow-x: ${props => props.overflowX};
    overflow-y: ${props => props.overflowY};
    position: ${props => props.position};
    z-index: ${props => props.zIndex};
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    cursor: ${props => props.cursor};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    max-width: ${props => props.maxHeight || "100%"};
    max-height: ${props => props.minHeight || "100%"};
    scale: ${props => props.initScale};
    transition: 0.3s;
    background: ${props => props.background};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    border-left: ${props => props.borderLeft};
    border-radius: ${props => props.borderRadius};
    text-align: ${props => props.textAlign};
    cursor: ${props => props.cursor};
    box-shadow: ${props => props.boxShadow};
    transition: ${props => props.transition};
    &:after {
        position: absolute;
        display: ${props => props.afterContent ? "block" : "none"};
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: ${props => props.after};
        z-index: ${props => props.zIndexAfter};
        border-radius: ${props => props.borderRadius};
    }
    &:before {
        position: absolute;
        display: ${props => props.beforeContent ? "block" : "none"};
        animation: skeletonAnimation alternate infinite 2s;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        background-image: url("${props => props.before}");
        background-color: ${colors.lightGrey};
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        border: solid 2px ${colors.middleGrey};
        object-fit: cover;
        z-index: ${props => props.zIndexBefore};
        border-radius: ${props => props.borderRadius};
        box-sizing: border-box;
    }
    &hover {
      background: ${props => props.hover};
      scale: ${props => props.scale ? 2 : null};
    }
    &::-webkit-scrollbar {
    width: 10px;
    scroll-padding: 2px;
    }
    
    /* Track */
    &::-webkit-scrollbar-track {
    background: ${colors.tableCellDark};
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
    border: 3px solid ${colors.tableCellDark};
    border-radius: 10px;
    background: ${colors.white};
    }
`

const skeletonAnimation = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`