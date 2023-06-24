import React, {useState} from 'react';
import {HStack,VStack} from "../../flex-stack";
import {StyledFooter} from "./footer.styled";
import {Text} from "../../text";
import {CustomLink} from "../../link";
import GooglePlayStoreBtn from "public/assets/footer/google-play-store-btn.svg";
import ApplePlayStoreBtn from "public/assets/footer/apple-play-store-btn.svg";
import FacebookBtn from "public/assets/footer/socials-facebook.svg";
import InstagramBtn from "public/assets/footer/socials-instagram.svg";
import TelegramBtn from "public/assets/footer/socials-telegram.svg";
import TelegramBtnColor from "public/assets/footer/socials-telegram-color.svg";
import InstagramBtnColor from "public/assets/footer/socials-instagram-color.svg";
import FacebookBtnColor from "public/assets/footer/socials-facebook-color.svg";
import {Button} from "../../button";
import {useTranslation} from "next-i18next";
import colors from "../../../../styles/globals/colors";

type ISocialButtonHandler = (link: string) => () => void;

const Footer = () => {

    const [buttonsOpacity, setButtonsOpacity] = useState({
        telegram: "notColored",
        instagram: "notColored",
        facebook: "notColored"
    });
    const { t } = useTranslation("main");
    const socialsButtonHandler: ISocialButtonHandler = (link) => () => {
        window.open(link)
    };

    const switchBtnColor = (property) => {
        setButtonsOpacity(prevState => ({
            ...prevState,
            ...property
        }));
    };

    return (
        <StyledFooter>
            <HStack
                position={"relative"}
                padding={"35px 70px 35px"}
            >
                <VStack
                    width={"40.376388%"}
                >
                    <Text
                        tag={"span"}
                        size={"24px"}
                    >
                        {t("footerDownloadApp")}
                    </Text>
                    <HStack
                        justify={"space-between"}
                        margin={"25px 0 30px"}
                        width={"300px"}
                    >
                        <CustomLink
                            width={"136px"}
                            height={"40px"}
                            externalHref={"https://play.google.com/store/apps"}
                        >
                            <GooglePlayStoreBtn/>
                        </CustomLink>
                        <CustomLink
                            width={"136px"}
                            height={"40px"}
                            externalHref={"https://www.apple.com/app-store/"}
                        >
                            <ApplePlayStoreBtn/>
                        </CustomLink>
                    </HStack>
                    <HStack
                        height={"auto"}
                        width={"100%"}
                        position={"relative"}
                    >
                        <Text
                            width={"auto"}
                            tag={"span"}
                            size={"24px"}
                        >
                            {t("footerTelegramBotStart")}
                        </Text>
                        <CustomLink
                            linkName={t("footerTelegramBotEnd")!}
                            width={"auto"}
                            externalHref={"https://telegram.org/"}
                            size={"24px"}
                            weight={500}
                            fontColor={colors.veryDarkGrey}
                            textDecoration={"underline"}
                            padding={"0"}
                        />
                    </HStack>
                </VStack>
                <VStack
                    width={"40.0138888%"}
                >
                    <Text
                        tag={"span"}
                        size={"24px"}
                    >
                        {t("footerSocials")}
                    </Text>
                    <HStack
                        justify={"space-between"}
                        margin={"25px 0 30px"}
                        width={"171px"}
                    >
                        <Button
                            width={"40px"}
                            height={"40px"}
                            onClick={
                                socialsButtonHandler("https://www.facebook.com/")
                            }
                            onMouseEnter={
                                () => {switchBtnColor({ facebook: "colored" })}
                            }
                            onMouseLeave={
                                () => {switchBtnColor({ facebook: "notColored" })}
                            }
                        >
                            <HStack
                                width={"100%"}
                                height={"100%"}
                            >
                                <FacebookBtn
                                    style={{
                                        position: "absolute",
                                        transition: "0.3s",
                                        transform: "scale(0.99)"
                                    }}
                                    width={"40px"}
                                    height={"40px"}
                                />
                                <FacebookBtnColor
                                    style={{
                                        position: "absolute",
                                        transition: "0.3s",
                                        opacity: buttonsOpacity.facebook === "colored" ? 1 : 0
                                    }}
                                    width={"40px"}
                                    height={"40px"}
                                />
                            </HStack>
                        </Button>
                        <Button
                            width={"40px"}
                            height={"40px"}
                            onClick={
                                socialsButtonHandler("https://www.instagram.com/")
                            }
                            onMouseEnter={
                                () => {switchBtnColor({ instagram: "colored" })}
                            }
                            onMouseLeave={
                                () => {switchBtnColor({ instagram: "notColored" })}
                            }
                        >
                            <HStack
                                width={"100%"}
                                height={"100%"}
                            >
                                <InstagramBtn
                                    style={{
                                        position: "absolute",
                                        transition: "0.3s",
                                        transform: "scale(1)"
                                    }}
                                    width={"40px"}
                                    height={"40px"}
                                />
                                <InstagramBtnColor
                                    style={{
                                        position: "absolute",
                                        transition: "0.3s",
                                        opacity: buttonsOpacity.instagram === "colored" ? 1 : 0
                                    }}
                                    width={"40px"}
                                    height={"40px"}
                                />
                            </HStack>
                        </Button>
                        <Button
                            width={"40px"}
                            height={"40px"}
                            onClick={
                                socialsButtonHandler("https://telegram.org/")
                            }
                            onMouseEnter={
                                () => {switchBtnColor({ telegram: "colored" })}
                            }
                            onMouseLeave={
                                () => {switchBtnColor({ telegram: "notColored" })}
                            }
                            transition={"0.3s"}
                        >
                            <HStack
                                width={"100%"}
                                height={"100%"}
                            >
                                <TelegramBtn
                                    style={{
                                        position: "absolute",
                                        transition: "0.3s",
                                        transform: "scale(0.98)"
                                    }}
                                    width={"40px"}
                                    height={"40px"}
                                />
                                <TelegramBtnColor
                                    style={{
                                        position: "absolute",
                                        transition: "0.3s",
                                        opacity: buttonsOpacity.telegram === "colored" ? 1 : 0
                                    }}
                                    width={"40px"}
                                    height={"40px"}
                                />
                            </HStack>
                        </Button>
                    </HStack>
                </VStack>
                <VStack>
                    <Text
                        tag={"span"}
                        text={"Nogarba.ge"}
                        size={"24px"}
                    />
                    <VStack
                        margin={"35px 0 0"}
                    >
                        <Text
                            tag={"span"}
                            size={"16px"}
                        >
                            {t("footerLocation")}
                        </Text>
                    </VStack>
                </VStack>
            </HStack>
        </StyledFooter>
    );
};

export {Footer};