import styled from "styled-components";
import colors from "../../../../styles/globals/colors";
import {ITextProps} from "./h1.styled";
const StyledH3 = styled.h3<ITextProps>`
    position: ${props => props.position};
    display: ${props => props.display};
    margin: ${props => props.margin};
    font-style: normal;
    font-weight: 600;
    line-height: ${props => props.lineHeight || 1.2};
    text-align: ${props => props.textAlign};;
    color: ${props => props.color};
    width: ${props => props.width};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    font-size: ${props => props.size};
    user-select: none;
    text-align: ${props => props.textAlign};
`;

export {
    StyledH3
}