import styled from "styled-components";
import {ITextProps} from "./h1.styled";

const StyledH2 = styled.h2<ITextProps>`
  position: ${props => props.position};
  display: ${props => props.display};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.3;
  align-items: ${props => props.textAlign};
  letter-spacing: 0.09em;
  color: #F5F7EF;
  margin: 0 23.28125%;//0 447px;
  width: ${props => props.width};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  top: ${props => props.top};
  font-size: ${props => props.size};
  text-align: ${props => props.textAlign};
  user-select: none;
`;

export {
    StyledH2
}