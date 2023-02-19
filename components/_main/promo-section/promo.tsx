import React, {FC, useEffect, useState} from 'react';
import {StyledSection, IStyledSection} from "./promo.styled";
import CustomImage from "../../_common/custom-image/custom-image";
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import Text from "../../_common/text/text";
import sizes from "../../../styles/globals/sizes";
import {useTranslation} from "next-i18next";

const Promo = (props: any) => {
    const {backgroundImage} = props;
    const {windowHeight, document} = useWindowDimensions();
    const [promoHeight, setPromoHeight] = useState(0);
    const {t} = useTranslation('main');

    const title = t('promoTitle');
    const afterBackgroundProps = `linear-gradient(180deg, rgba(40, 23, 17, 0) 26.56%, rgba(40, 23, 17, 0.47) 72.92%);`;
    useEffect(() => {
        if(windowHeight && document){
            setPromoHeight(prevState => windowHeight - sizes.navbarHeight);
        }
    },[windowHeight, document])

    return (
        <StyledSection
            height={`${promoHeight}px`}
        >
            <CustomImage
                position={"absolute"}
                afterContent
                backgroundImage={backgroundImage}
                after={afterBackgroundProps}
                width={"100%"}
                height={"100%"}
                zIndex={-1}
            />
            <Text
                tag={"h2"}
                text={title}
                bottom={"89px"}
                position={"absolute"}
                textAlign={'center'}
            />
        </StyledSection>
    );
};

export default Promo;