import React from 'react';
import {StyledSection} from "../../promo-section/ui/promo-section/promo.styled";
import {CustomImage} from "../../../_common/custom-image";
import {Text} from "../../../_common/text";
import {useTranslation} from "next-i18next";
import {Button} from "../../../_common/button";
import colors from "../../../../styles/globals/colors";
import {VStack} from "../../../_common/flex-stack";
import {useRouter} from "next/router";

const MapSection = () => {
    const {t} = useTranslation("main");
    const {push} = useRouter();
    const mapButtonHandler = () => {
        return push("/map")
    };
    return (
        <StyledSection
            height={"970px"}
        >
            <CustomImage
                position={"absolute"}
                afterContent
                backgroundImage={"/assets/main-page/map-backgroundColor.png"}
                width={"100%"}
                height={"100%"}
                zIndexAfter={1}
                zIndex={-1}
                after={colors.whiteBright}
                hover={colors.black}
            />
            <VStack
                justify={"space-between"}
                align={"center"}
                height={"100%"}
                padding={"150px 505px 223px"}
            >
                <Text
                    tag={"h3"}
                    textAlign={"center"}
                    width={"500px"}
                >{t("mapSectionTitle")}</Text>
                <Text
                    tag={"span"}
                    textAlign={"center"}
                    width={"500px"}
                >{t("mapSectionUpperDescription")}</Text>
                <Button
                    buttonName={t("mapSectionButtonName")!}
                    onClick={mapButtonHandler}
                    backgroundColor={colors.terraCotta}
                    color={colors.white}
                    width={"340px"}
                />
            </VStack>
        </StyledSection>
    );
};

export { MapSection };