import styled from "styled-components";
import {ITextProps} from "./h1.styled";

const StyledH2 = styled.h2<ITextProps>`
    position: ${props => props.position};
    display: ${props => props.display};
    margin: ${props => props.margin};
    font-weight: 700;
    align-items: ${props => props.textAlign};
    letter-spacing: 0.09em;
    color: ${props => props.color};
    margin: ${props => props.margin};
    width: ${props => props.width};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    font-size: ${props => props.size};
    ${props => props.lineHeight || 1.2};
    text-align: ${props => props.textAlign};
    user-select: none;
`;

export {
    StyledH2
}