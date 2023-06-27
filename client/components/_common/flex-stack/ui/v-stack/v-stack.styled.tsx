import styled from "styled-components";
import {IStack} from "../h-stack/h-stack.styled";

const VStackStyled = styled.div<IStack>`
    position: ${props => props.position};
    top: ${props => props.top};
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    overflow: ${props => props.overflow};
    flex-grow: ${props => props.wrap};
    width: ${props => props.width};
    height: ${props => props.height};
    min-width: ${props => props.minWidth};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    text-align: ${props => props.textAlign};
    background: ${props => props.background};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    flex-wrap: ${props => props.wrap};
    cursor: ${props => props.cursor};
    opacity: ${props => props.opacity};
    z-index: ${props => props.zIndex};
    transition: ${props => props.transition};
    box-sizing: border-box;
};
`

export default VStackStyled