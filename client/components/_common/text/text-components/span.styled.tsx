import styled from "styled-components";
import {ITextProps} from "./h1.styled";

const StyledSpan = styled.span<ITextProps>`
    position: ${props => props.position};
    display: ${props => props.display};
    margin: ${props => props.margin};
    font-style: normal;
    font-weight: ${props => props.weight || 400};
    line-height: ${props => props.lineHeight || 1.2};
    font-size: ${props => props.size};
    align-items: ${props => props.textAlign};
    align-self: ${props => props.alignSelf};
    color: ${props => props.color};
    white-space: break-spaces;
    width: ${props => props.width};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    text-align: ${props => props.textAlign};
    
`;

export {
    StyledSpan
}