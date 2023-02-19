import React, {FC} from 'react';
import {IStyledNavbar, StyledNavbar} from "./nav-bar.styled";
import LogoBlock from "./logo-block/logo-block";
import LinkPanel from "./link-panel/link-panel";
import NavButtons from "./nav-btns/nav-buttons";
const NavBar: FC<IStyledNavbar> = ({backgroundColor}) => {
    return (
        <StyledNavbar
            backgroundColor={backgroundColor}
            navbarHeight={100}
        >
            <LogoBlock/>
            <LinkPanel/>
            <NavButtons/>
        </StyledNavbar>
    );
};

export default NavBar;