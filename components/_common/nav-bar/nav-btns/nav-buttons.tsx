import React, {FC} from 'react';
import Button from "../../button/button";
import HStack from "../../flex-stack/h-stack/h-stack";
import {useTranslation} from "next-i18next";
import {useCustomTranslation} from "../../../../hooks/use-custom-translation";
import colors from "../../../../styles/globals/colors";
import {useAppDispatch} from "../../../../store/store";
import {loginModalActions} from "../../login-modal-window/model/login-modal-window.slice";
import Profile from "../../profile/profile";
import {useSelector} from "react-redux";
import {getLoginData} from "../../login-modal-window/model/login-modal-window.selectors";
import {VerticalDropdownMenu} from "../../dropdown-menu/vertical-dropdown-menu/verticall-dropdown-menu";

export interface NavButtonsProps {
    userData?: any
    fontColor?: string
}

const NavButtons: FC<NavButtonsProps> = ({userData, fontColor}) => {

    const { t } = useTranslation("main");
    const dispatch = useAppDispatch();
    const profileData = useSelector(getLoginData);

    const showLoginModal = () => {
        dispatch(loginModalActions.setModalVisibility());
    }
    const [language, setLanguage]: any = useCustomTranslation();


    return (
        <HStack
            align={"center"}
            justify={"space-between"}
            width={"auto"}
        >
            {
                userData.email || profileData ? (
                    <Profile
                        fontColor={fontColor}
                    />
                    ) : (
                    <Button
                        buttonName={t("login")!}
                        handleClick={showLoginModal}
                        width={"126px"}
                        borderRadius={"8px"}
                        color={colors.defaultTextColor}
                        backgroundColor={colors.white}
                    />
                )
            }
            <HStack
                margin={"0 0 0 25px"}
                top={"0"}
                width={"126px"}
                height={"50px"}
                position={"relative"}
            >
                <VerticalDropdownMenu
                    items={["en", "ge", "ru"]}
                    position={"absolute"}
                    buttonHeight={50}
                    selectedProperty={language}
                    setSelectedProperty={setLanguage}
                    backgroundColorOnHover={colors.middleGrey}
                />
            </HStack>
        </HStack>
    );
};

export default NavButtons;