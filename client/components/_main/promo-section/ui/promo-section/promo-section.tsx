import React, {useEffect, useState} from 'react';
import useWindowDimensions from "../../../../../hooks/use-window-dimensions";
import {StyledSection} from "./promo.styled";
import {useTranslation} from "next-i18next";
import {VStack} from "../../../../_common/flex-stack";
import sizes from "../../../../../styles/globals/sizes";
import {Text} from "../../../../_common/text";
import PromoBanner from "../promo-banner/promo-banner";

const PromoSection = () => {

    const {t} = useTranslation('main');
    const title = t('promoTitle');

    return (
        <StyledSection
            width={"auto"}
            height={`auto`}
            margin={"80px 0 0"}
        >
            <VStack>
                <Text
                    tag={"h2"}
                    size={"64px"}
                    bottom={"89px"}
                    fontWeight={"600"}
                    textAlign={'left'}
                >
                    {title}
                </Text>
                <PromoBanner/>
            </VStack>
        </StyledSection>
    );
};

export { PromoSection };