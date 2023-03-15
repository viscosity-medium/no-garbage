import React, {useContext} from 'react';
import NavBar from "../components/_common/nav-bar/nav-bar";
import Promo from "../components/_main/promo-section/promo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import Goals from "../components/_main/goals-section/goals";
import MapSection from "../components/_main/map-section/map-section";
import HelpSection from "../components/_main/help-section/help-section";
import {Context} from "../context/context";
import colors from "../styles/globals/colors";
import Footer from "../components/_common/footer/footer";
import Head from "next/head";
import AuthModal from "../components/_common/auth-modal/auth-modal";

const MainPage = () => {
    const promoImagePath = "/assets/main-page/promo-section.png";
    const { t } = useTranslation(['main']);
    const { pastelGray } = colors;
    return (
        <>
            <Head>
                <meta name="keywords" content="Tbilisi, Georgia, garbage, eco, cleanups"/>
                <title>Nogarba.ge</title>
            </Head>
            <NavBar backgroundColor={pastelGray}/>
            <Promo backgroundImage={promoImagePath}/>
            <Goals/>
            <MapSection/>
            <HelpSection/>
            <Footer/>
            {/*<AuthModal/>*/}
        </>
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