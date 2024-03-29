import styled from "styled-components";
import {ITextProps} from "./h1.styled";

const StyledH2 = styled.h2<ITextProps>`
    position: ${props => props.position};
    display: ${props => props.display};
    margin: ${props => props.margin};
    font-weight: ${props => props.fontWeight || 600};
    align-items: ${props => props.textAlign};
    align-self: ${props => props.alignSelf};
    letter-spacing: 2px;
    color: ${props => props.color};
    margin: ${props => props.margin};
    width: ${props => props.width};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    font-size: ${props => props.size};
    line-height: ${props => props.lineHeight || 1.2};
    text-align: ${props => props.textAlign};
    text-overflow: ${props => props.textOverflow};
    user-select: none;
    white-space: ${props => props.whiteSpace};
    overflow: ${props => props.overflow};
`;

export {
    StyledH2
}