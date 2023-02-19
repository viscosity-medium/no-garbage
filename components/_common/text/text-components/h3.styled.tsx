import styled from "styled-components";
import colors from "../../../../styles/globals/colors";
import {ITextProps} from "./h1.styled";
const StyledH3 = styled.h3<ITextProps>`
  position: ${props => props.position};
  display: ${props => props.display};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  text-align: ${props => props.textAlign};;
  color: ${colors.black};
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