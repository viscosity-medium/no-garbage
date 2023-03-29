import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useAuthenticateUser } from "../../hooks/use-authenticate-user";
import { LoginModalWindow } from "../../components/_common/login-modal-window";
import { useCheckIsAuth } from "../../hooks/use-check-is-auth";
import { ModalWindow } from "../../components/_moderation/modal";
import { useState } from "react";
import PageWrapper from "../../components/_common/page-wrapper/page-wrapper";
import DataWindow from "../../components/_moderation/data-window/data-window";
import { Div } from "../../components/_common/custom-image/custom-div.styled";
import Sidebar from "../../components/_common/sidebar/sidebar";
import NavBar from "../../components/_common/nav-bar/nav-bar";
import HStack from "../../components/_common/flex-stack/h-stack/h-stack";
import colors from "../../styles/globals/colors";
import Head from "next/head";


interface Tokens {
    accessToken: string | undefined | null
    refreshToken: string | undefined | null
}

const ModerationPage = () => {

    const [tokens, setTokens] = useState<Tokens>({
        accessToken: undefined,
        refreshToken: undefined,
    });

    useAuthenticateUser();
    useCheckIsAuth({ setTokens });

    return (
        <>
            {
                (tokens.accessToken && tokens?.refreshToken) ? (
                    <PageWrapper

                    >
                        <Head>
                            <meta name="keywords" content="Tbilisi, Georgia, garbage, eco, cleanups"/>
                            <meta name="color-scheme" content="light only"/>
                            <title>Nogarba.ge</title>
                        </Head>
                        <NavBar
                            backgroundColor={colors.moderationNavbar}
                            nameColor1={colors.lightBlack}
                            nameColor2={colors.moderationName2}
                            linkHoverFontColor={colors.moderationNavbar}
                            linkHoverBackground={colors.backgroundMilk}
                            profileFontColor={colors.black}
                        />
                        <Div
                            zIndex={1}
                            height={"100%"}
                            width={"100%"}
                            position={"relative"}
                        >
                            <HStack
                                justify={"space-between"}
                                align={"start"}
                                width={"100%"}
                                height={"100%"}
                                wrap={"no-wrap"}
                            >
                                <Sidebar
                                    position={"relative"}
                                    sidebarWidth={["160px", "70px"]}
                                    sidebarType={"dynamic"}
                                    color={colors.moderationSidebar}
                                />
                                <DataWindow/>
                            </HStack>
                            <ModalWindow/>
                        </Div>
                        <LoginModalWindow/>
                    </PageWrapper>) : <></>
            }
        </>

    )

};

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main', 'moderation'])),
        },
    }
}

export default ModerationPage;
