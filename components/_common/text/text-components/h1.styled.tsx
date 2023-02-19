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
const StyledH1 = styled.h1<ITextProps>`
  position: ${props => props.position};
  display: ${props => props.display};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  display: flex;
  align-items: ${props => props.textAlign};
  color: #1C767B;
  width: ${props => props.width};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  top: ${props => props.top};
  font-size: ${props => props.size || "34px"};
  user-select: none;
  text-align: ${props => props.textAlign};
`;

export {
    StyledH1
}