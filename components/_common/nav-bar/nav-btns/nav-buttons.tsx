import React, {FC, useEffect} from 'react';
import Button from "../../button/button";
import CustomSelect from "../../custom-select/custom-select";
import HStack from "../../flex-stack/h-stack/h-stack";
import {useTranslation} from "next-i18next";
import {useCustomTranslation} from "../../../../hooks/use-custom-translation";
import colors from "../../../../styles/globals/colors";
import RusImg from "public/assets/common/lang/rus.svg";
import EngImg from "public/assets/common/lang/eng.svg";
import GeoImg from "public/assets/common/lang/geo.svg"
import {useAppDispatch} from "../../../../store/store";
import {loginModalActions} from "../../login-modal-window/model/login-modal-window.slice";
import Profile from "../../profile/profile";
import {useSelector} from "react-redux";
import {getModalVisibility} from "../../../_moderation/modal/modal-selectors";
import {getLoginData} from "../../login-modal-window/model/login-modal-window.selectors";
import {getUserDataFromLocalStorage} from "../../../../hooks/get-user-data-from-local-storage";

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
                        backgroundColor={colors.wildBlueYonder}
                    />
                )
            }
            <CustomSelect
                selectedProperty={language}
                setSelectedProperty={setLanguage}
                types={{
                    en: "En",
                    ge: "Ge",
                    ru: "Ru",
                }}
                selectImgObject={{
                    en: EngImg,
                    ge: GeoImg,
                    ru: RusImg,
                }}
                margin={"0 0 0 25px"}
            />
        </HStack>
    );
};

export default NavButtons;