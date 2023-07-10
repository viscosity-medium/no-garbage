import React, {FC} from 'react';
import {IStyledHeader, StyledHeader} from "./header.styled";
import LogoBlock from "./logo-block/logo-block";
import NavPanel from "./nav-panel/nav-panel";
import NavButtons from "./nav-btns/nav-buttons";
import {getUserDataFromLocalStorage} from "../../../../hooks/get-user-data-from-local-storage";
const Header: FC<IStyledHeader> = ({
    backgroundColor,
    nameColor1,
    nameColor2,
    linkHoverFontColor,
    linkHoverBackground,
    profileFontColor
}) => {

    const userData = getUserDataFromLocalStorage();

    return (
        <StyledHeader
            backgroundColor={backgroundColor}
            navbarHeight={100}
        >
            <LogoBlock
                nameColor1={nameColor1}
                nameColor2={nameColor2}
            />
            <NavPanel
                linkHoverFontColor={linkHoverFontColor}
                linkHoverBackground={linkHoverBackground}
            />
            <NavButtons
                userData={userData}
                fontColor={profileFontColor}
            />
        </StyledHeader>
    );
};

export { Header };