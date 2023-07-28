import styled from "styled-components";

export interface ITextProps {
    position?: string
    display?: string
    width?: string
    height?: string
    left?: string
    right?: string
    bottom?: string
    top?: string
    size?: string
    fontWeight?: string
    textAlign?: string
    margin?: string
    lineHeight?: string
    alignSelf?: string
    textOverflow?: string
    whiteSpace?: string
    overflow?: string
}
const StyledH1 = styled.h1<ITextProps>`
    position: ${props => props.position};
    display: ${props => props.display};
    font-style: normal;
    font-weight: ${props => props.fontWeight || 600};
    line-height:  ${props => props.lineHeight || 1.2};
    margin: ${props => props.margin};
    align-items: ${props => props.textAlign};
    align-self: ${props => props.alignSelf};
    color: ${props => props.color};
    width: ${props => props.width};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    font-size: ${props => props.size || "34px"};
    user-select: none;
    text-align: ${props => props.textAlign};
    margin: ${props => props.margin};
    text-overflow: ${props => props.textOverflow};
    white-space: ${props => props.whiteSpace};
    overflow: ${props => props.overflow};
`;

export {
    StyledH1
}