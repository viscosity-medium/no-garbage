import styled from "styled-components";
import colors from "../../../styles/globals/colors";
interface IFooterProps {
    height? : string
}

export const StyledFooter = styled.footer<IFooterProps>`
  height: ${props => props.height};
  background-color: ${colors.footer};
`;