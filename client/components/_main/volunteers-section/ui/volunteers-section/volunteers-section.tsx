import React from 'react';
import {Text} from "../../../../_common/text";
import {HStack} from "../../../../_common/flex-stack";
import {CustomImage} from "../../../../_common/custom-image";
import {Div} from "../../../../_common/custom-image/ui/custom-div.styled";
import {Swiper} from "../../../../_common/swiper";
import {StyledSection} from "../../../promo-section/ui/promo-section/promo.styled";
import {useTranslation} from "next-i18next";

const VolunteersSection = () => {

    const {t} = useTranslation("main")
    const message = "/assets/main-page/message.png";
	const cleanupsReasons = t("cleanupsReasons");

    return (
        <StyledSection
            width={"100%"}
        >
            <Text
                tag={"h3"}
                size={"48px"}
                lineHeight={"1.5"}
                position={"relative"}
                alignSelf={"flex-start"}
                width={"510px"}
            >
                {cleanupsReasons}
            </Text>
            <HStack
                margin={"48px 0"}
                width={"100%"}
                height={"auto"}
                position={"relative"}
            >
                <CustomImage
                    position={"absolute"}
                    top={"-76%"}
                    right={"0"}
                    zIndex={1}
                    width={"300px"}
                    height={"300px"}
                    backgroundImage={message}
                />
                <Div
                    width={"100%"}
                    height={"auto"}
                    position={"relative"}
                    zIndex={2}
                >
                    <Swiper
                        photos={["khbkh", "khbkc", "khbky", "khbky"]}
                    >
                    </Swiper>
                </Div>

            </HStack>

        </StyledSection>
    );
};

export { VolunteersSection };