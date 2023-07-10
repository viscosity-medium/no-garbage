import styled from "styled-components";
import sizes from "../../../../styles/globals/sizes";

export interface IStyledHeader {
    backgroundColor?: string
    nameColor1?: string
    nameColor2?: string
    navbarHeight?: number
    linkHoverFontColor?: string
    linkHoverBackground?: string
    profileFontColor?: string
}
const StyledHeader = styled.header<IStyledHeader>`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: ${sizes.navbarHeight}px;
    background-color: ${ props => props.backgroundColor };
    box-sizing: border-box;
    padding: 0 70px;
    z-index: 10;
`

export {
    StyledHeader
}