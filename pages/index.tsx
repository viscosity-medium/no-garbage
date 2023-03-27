import NavBar from "../components/_common/nav-bar/nav-bar";
import {PromoSection} from "../components/_main/promo-section";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'react-i18next';

import Goals from "../components/_main/goals-section/goals";
import MapSection from "../components/_main/map-section/map-section";
import HelpSection from "../components/_main/help-section/help-section";
import colors from "../styles/globals/colors";
import Footer from "../components/_common/footer/footer";
import Head from "next/head";
import { LoginModalWindow } from "../components/_common/login-modal-window";
import {useAuthenticateUser} from "../hooks/use-authenticate-user";
import PageWrapper from "../components/_common/page-wrapper/page-wrapper";
import VStack from "../components/_common/flex-stack/v-stack/v-stack";
import BottomImageSection from "../components/_main/bottom-image-section/bottom-image-section";
import VolunteersSection from "../components/_main/volunteers-section/ui/volunteers-section/volunteers-section";


const MainPage = () => {

    const promoImagePath = "/assets/main-page/map-backgroundColor.png";
    const { t } = useTranslation(['main']);
    const { veryDarkGreen } = colors;
    useAuthenticateUser();

    return (
        <PageWrapper
            isAnimated={true}
        >
            <Head>
                <meta name="keywords" content="Tbilisi, Georgia, garbage, eco, cleanups"/>
                <meta name="color-scheme" content="light only"/>
                <title>Nogarba.ge</title>
            </Head>
            <NavBar
                backgroundColor={ veryDarkGreen }
                nameColor1={colors.lightGrey}
                nameColor2={colors.brightLime}
                linkHoverFontColor={colors.veryDarkGreen}
                linkHoverBackground={colors.backgroundMilk}
                profileFontColor={colors.backgroundMilk}
            />
            <PageWrapper
                isAnimated={false}
                backgroundColor={colors.lightGrey}
            >
                <VStack
                    width={"1440px"}
                    margin={"0 auto"}

                >
                    <PromoSection backgroundImage={promoImagePath}/>
                    <Goals/>
                    <VolunteersSection/>
                </VStack>
            </PageWrapper>
            <BottomImageSection/>
            <Footer/>
            <LoginModalWindow/>
        </PageWrapper>
    );
};

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main'])),
        },
    }
}

export default MainPage;