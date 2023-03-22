import React, {FC} from 'react';
import {IStyledNavbar, StyledNavbar} from "./nav-bar.styled";
import LogoBlock from "./logo-block/logo-block";
import LinkPanel from "./link-panel/link-panel";
import NavButtons from "./nav-btns/nav-buttons";
import {getUserDataFromLocalStorage} from "../../../hooks/get-user-data-from-local-storage";
const NavBar: FC<IStyledNavbar> = ({
    backgroundColor,
    nameColor1,
    nameColor2,
    linkHoverFontColor,
    linkHoverBackground,
    profileFontColor
}) => {

    const userData = getUserDataFromLocalStorage();

    return (
        <StyledNavbar
            backgroundColor={backgroundColor}
            navbarHeight={100}
        >
            <LogoBlock
                nameColor1={nameColor1}
                nameColor2={nameColor2}
            />
            <LinkPanel
                linkHoverFontColor={linkHoverFontColor}
                linkHoverBackground={linkHoverBackground}
            />
            <NavButtons
                userData={userData}
                fontColor={profileFontColor}
            />
        </StyledNavbar>
    );
};

export default NavBar;