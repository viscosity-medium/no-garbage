import styled from "styled-components";
import sizes from "../../../styles/globals/sizes";

export interface IStyledNavbar {
    backgroundColor: string
    navbarHeight?: number
}
const StyledNavbar = styled.nav<IStyledNavbar>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${sizes.navbarHeight}px;
  background-color: ${
    props => props.backgroundColor
  };
  box-sizing: border-box;
  padding: 0 96px 0 24px;
  z-index: 10;
`

export {
    StyledNavbar
}