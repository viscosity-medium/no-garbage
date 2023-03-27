import React from 'react';
import {StyledSection} from "../promo-section/ui/promo-section/promo.styled";
import CustomImage from "../../_common/custom-image/custom-image";
import Text from "../../_common/text/text";
import {useTranslation} from "next-i18next";
import Button from "../../_common/button/button";
import colors from "../../../styles/globals/colors";
import VStack from "../../_common/flex-stack/v-stack/v-stack";
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
                    text={t("mapSectionTitle")}
                    textAlign={"center"}
                    width={"500px"}
                />
                <Text
                    tag={"span"}
                    text={t("mapSectionDescription")}
                    textAlign={"center"}
                    width={"500px"}
                />
                <Button
                    buttonName={t("mapSectionButtonName")!}
                    handleClick={mapButtonHandler}
                    backgroundColor={colors.terraCotta}
                    color={colors.white}
                    width={"340px"}
                />
            </VStack>
        </StyledSection>
    );
};

export default MapSection;