import React, {useEffect, useState} from 'react';
import useWindowDimensions from "../../../hooks/use-window-dimensions";
import { StyledSection } from "./promo.styled";
import {useTranslation} from "next-i18next";
import CustomImage from "../../_common/custom-image/custom-image";
import VStack from "../../_common/flex-stack/v-stack/v-stack";
import colors from "../../../styles/globals/colors";
import sizes from "../../../styles/globals/sizes";
import Text from "../../_common/text/text";
import {Div} from "../../_common/custom-image/custom-div.styled";
import MapImage from "public/assets/main-page/map-background.png"

const Promo = (props: any) => {

    const {backgroundImage} = props;
    const {windowHeight, document} = useWindowDimensions();
    const [promoHeight, setPromoHeight] = useState(0);
    const {t} = useTranslation('main');

    const title = t('promoTitle');
    const heart = "/assets/main-page/heart.png"
    useEffect(() => {
        if(windowHeight && document){
            setPromoHeight(prevState => windowHeight - sizes.navbarHeight);
        }
    },[windowHeight, document])

    return (
        <StyledSection
            height={`${promoHeight}px`}
            backgroundColor={colors.lightGrey}
            padding={"89px 70px 0"}
        >
            <VStack>
                <Text
                    tag={"h2"}
                    text={title}
                    size={"78px"}
                    bottom={"89px"}
                    textAlign={'left'}
                    margin={"0 0 0 90px"}
                />
                <CustomImage
                    position={"absolute"}
                    width={"300px"}
                    height={"300px"}
                    zIndex={1}
                    right={"117px"}
                    top={"85px"}
                    backgroundImage={heart}
                />
                <Div
                    position={"relative"}
                    margin={"50px 0 0 auto"}
                    // padding={"48px 72px 40px 40px"}
                    width={"1142px"}
                    height={"571px"}
                    zIndex={2}
                    border={`solid 2px ${colors.orange}`}
                    borderRadius={"9px"}
                    background={MapImage.src}
                >
                    <VStack
                        padding={"48px 72px 40px 40px"}
                    >
                        <Text
                            tag={"h3"}
                            text={"Here you can explore our database of locations and add your own"}
                            size={"48px"}
                            color={colors.brightLime}
                            width={"830px"}
                        />
                        <Text
                            tag={"span"}
                            text={"Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.\n" +
                                "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."}
                            size={"20px"}
                            lineHeight={"1.6"}
                            margin={"25px 0 "}
                            width={"500px"}
                            color={colors.white}
                        />
                        <VStack>
                            <Text
                                tag={"span"}
                                text={"3 steps"}
                                size={"20px"}
                                lineHeight={"1.6"}
                                color={colors.white}
                            />
                            <Text
                                tag={"span"}
                                text={"Step 1 ——— Step 2 ——— Step 3 "}
                                size={"20px"}
                                lineHeight={"1.6"}
                                color={colors.white}
                            />
                        </VStack>
                    </VStack>
                    <CustomImage
                        position={"absolute"}
                        top={"0"}
                        afterContent
                        after={colors.opaqueOrange}
                        width={"100%"}
                        height={"100%"}
                        zIndex={-1}
                        borderRadius={"8px"}
                        backgroundImage={MapImage}
                    />
                </Div>
            </VStack>
        </StyledSection>
    );
};

export default Promo;