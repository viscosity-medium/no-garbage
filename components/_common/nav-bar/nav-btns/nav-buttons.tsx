import React from 'react';
import Button from "../../button/button";
import CustomSelect from "../../custom-select/custom-select";
import HStack from "../../flex-stack/h-stack/h-stack";
import {useTranslation} from "next-i18next";
import {useCustomTranslation} from "../../../../hooks/use-custom-translation";
import colors from "../../../../styles/globals/colors";
import RusImg from "public/assets/common/lang/rus.svg";
import EngImg from "public/assets/common/lang/eng.svg";
import GeoImg from "public/assets/common/lang/geo.svg"

const NavButtons = () => {
    const { t } = useTranslation("main");
    const loginHandleClick = () => {

    };
    const [language, setLanguage]: any = useCustomTranslation();
    return (
        <HStack
            align={"center"}
            justify={"space-between"}
            width={"326px"}
        >
            <Button
                buttonName={t("login")!}
                handleClick={loginHandleClick}
                width={"126px"}
                backgroundColor={colors.wildBlueYonder}
            />
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
            />
        </HStack>
    );
};

export default NavButtons;