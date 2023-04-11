import React from 'react';
import colors from "../../../../../styles/globals/colors";
import MapImage from "public/assets/main-page/map-background.png"
import CustomImage from "../../../../_common/custom-image/custom-image";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import Text from "../../../../_common/text/text";
import Button from "../../../../_common/button/button";
import {Div} from "../../../../_common/custom-image/custom-div.styled";
import {useRouter} from "next/router";

const PromoBanner = () => {

    const heart = "/assets/main-page/heart.png";
    const arrowLong = "/assets/main-page/arrow-long.svg";

    const {push} = useRouter();
    const onMapButtonClick = async () => {
        await push("/map")
    }

    return (
        <Div
            position={"relative"}
            margin={"50px 0 0 auto"}
            width={"1140px"}
            height={"500px"}
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
                        text={"Where to clean?"}
                        lineHeight={"1.1"}
                        size={"72px"}
                        color={colors.brightLime}
                        width={"auto"}
                    />
                    <Text
                        tag={"h3"}
                        text={"Explore our interactive map.\n" +
                            "Add your data. "}
                        size={"48px"}
                        lineHeight={"1.2"}
                        margin={"4px 0"}
                        color={colors.white}
                    />
                    <Text
                        margin={"10px 0 0"}
                        tag={"span"}
                        size={"20px"}
                        lineHeight={"1.6"}
                        weight={"600"}
                        color={colors.white}
                    >
                        With our live map, you can explore locations where a cleanup is needed.
                        Pick a place, grab your friends — and don't forget to mark it clean at the end! You can also add information like photos,
                        videos and coordinates for other volunteers.
                    </Text>
                    <Text
                        margin={"20px 0 0"}
                        tag={"span"}
                        size={"20px"}
                        lineHeight={"1.6"}
                        weight={"600"}
                        color={colors.white}
                    >
                        Let's make our effort useful!
                    </Text>
                </VStack>
                <Button
                    width={"340px"}
                    height={"72px"}
                    backgroundColor={colors.orange}
                    color={colors.white}
                    borderRadius={"8px"}
                    handleClick={onMapButtonClick}
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
                            weight={"600px"}
                            color={colors.white}
                        >
                            OPEN THE MAP
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