import React from 'react';
import colors from "../../../../../styles/globals/colors";
import MapImage from "public/assets/main-page/map-background.png"
import {CustomImage} from "../../../../_common/custom-image";
import {HStack, VStack} from "../../../../_common/flex-stack";
import {Text} from "../../../../_common/text";
import {Button} from "../../../../_common/button";
import {Div} from "../../../../_common/custom-image/ui/custom-div.styled";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const PromoBanner = () => {

    const heart = "/assets/main-page/heart.png";
    const arrowLong = "/assets/main-page/arrow-long.svg";

    const {t} = useTranslation('main');
    const {push} = useRouter();
    const onMapButtonClick = async () => {
        await push("/map")
    };

    const mapSectionTitle = t("mapSectionTitle");
    const mapSectionUpperDescription = t("mapSectionUpperDescription");
    const mapSectionMiddleDescription = t("mapSectionMiddleDescription");
    const mapSectionDownDescription = t("mapSectionDownDescription");
    const mapSectionButtonName = t("mapSectionButtonName");

    return (
        <Div
            position={"relative"}
            margin={"50px 0 0 auto"}
            width={"1140px"}
            height={"auto"}
            zIndex={1}
            border={`solid 2px ${colors.veryDarkGreen}`}
            borderRadius={"8px"}
            background={MapImage.src}
            backgroundColor={colors.veryDarkGreen}
        >
            <CustomImage
                position={"absolute"}
                zIndex={1}
                right={"55px"}
                top={"-85px"}
                width={"300px"}
                height={"300px"}
                backgroundImage={heart}
            />
            <HStack
                padding={"36px 54px 40px 55px"}
                align={"flex-end"}
                justify={"space-between"}
                height={"100%"}
            >
                <VStack
                    width={"640px"}
                    height={"100%"}
                >
                    <Text
                        tag={"h2"}
                        lineHeight={"1.1"}
                        size={"72px"}
                        fontWeight={"500"}
                        color={colors.brightLime}
                        width={"auto"}
                    >
                        {
                            mapSectionTitle
                        }
                    </Text>
                    <Text
                        tag={"h3"}
                        size={"48px"}
                        lineHeight={"1.2"}
                        margin={"4px 0"}
                        color={colors.white}
                    >
                        {
                            mapSectionUpperDescription
                        }
                    </Text>
                    <Text
                        margin={"10px 0 0"}
                        tag={"span"}
                        size={"20px"}
                        lineHeight={"1.6"}
                        fontWeight={"600"}
                        color={colors.white}
                    >
                        {
                            mapSectionMiddleDescription
                        }
                    </Text>
                    <Text
                        margin={"20px 0 0"}
                        tag={"span"}
                        size={"20px"}
                        lineHeight={"1.6"}
                        fontWeight={"600"}
                        color={colors.white}
                    >
                        {
                            mapSectionDownDescription
                        }
                    </Text>
                </VStack>
                <Button
                    width={"340px"}
                    height={"72px"}
                    backgroundColor={colors.orange}
                    color={colors.white}
                    borderRadius={"8px"}
                    onClick={onMapButtonClick}
                >
                    <HStack
                        justify={"space-between"}
                        align={"center"}
                        padding={"12px 22px"}
                    >
                        <CustomImage
                            position={"relative"}
                            width={"100px"}
                            height={"20px"}
                            zIndex={1}
                            backgroundImage={arrowLong}
                        />
                        <Text
                            tag={"span"}
                            size={"24px"}
                            lineHeight={"2"}
                            fontWeight={"600px"}
                            color={colors.white}
                        >
                            {
                                mapSectionButtonName
                            }
                        </Text>
                    </HStack>
                </Button>
            </HStack>
            <CustomImage
                position={"absolute"}
                top={"0"}
                afterContent
                after={colors.opaqueVeryDarkGreen}
                width={"100%"}
                height={"100%"}
                zIndex={-1}
                borderRadius={"8px"}
                backgroundImage={MapImage}
            />
        </Div>
    );
};

export default PromoBanner;