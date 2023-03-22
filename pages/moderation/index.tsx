import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import ModalWindow from "../../components/_moderation/modal/modal-window/modal-window";
import DataWindow from "../../components/_moderation/data-window/data-window";
import Sidebar from "../../components/_common/sidebar/sidebar";
import NavBar from "../../components/_common/nav-bar/nav-bar";
import HStack from "../../components/_common/flex-stack/h-stack/h-stack";
import colors from "../../styles/globals/colors";
import {Div} from "../../components/_common/custom-image/custom-div.styled";
import PageWrapper from "../../components/_common/page-wrapper/page-wrapper";
import {LoginModalWindow} from "../../components/_common/login-modal-window";
import React, {useEffect, useState} from "react";
import {useAuthenticateUser} from "../../hooks/use-authenticate-user";
import {useRouter} from "next/router";
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
    const { push } = useRouter();
    useAuthenticateUser();

    useEffect(()=>{
        if( typeof window !== undefined ){

            const refreshToken = localStorage.getItem("refreshToken");
            const accessToken = localStorage.getItem("accessToken");
            setTokens({
                refreshToken: refreshToken,
                accessToken: accessToken
            })
            if(!tokens?.refreshToken || ! accessToken) {
                push("/")
            }
        }
    },[])

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