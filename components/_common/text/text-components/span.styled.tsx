import styled from "styled-components";

export interface ITextProps {
    position?: string
    display?: string
    width?: string
    left?: string
    right?: string
    bottom?: string
    top?: string
    size?: string
    textAlign?: string
    margin?: string
    lineHeight?: string
}
const StyledSpan = styled.span<ITextProps>`
    position: ${props => props.position};
    display: ${props => props.display};
    margin: ${props => props.margin};
    font-style: normal;
    font-weight: 400;
    line-height: ${props => props.lineHeight || 1.2};
    font-size: ${props => props.size};
    align-items: ${props => props.textAlign};
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