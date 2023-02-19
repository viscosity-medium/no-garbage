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
}
const StyledSpan = styled.span<ITextProps>`
  position: ${props => props.position};
  display: ${props => props.display};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  font-size: ${props => props.size};
  align-items: ${props => props.textAlign};
  color: #000000;
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