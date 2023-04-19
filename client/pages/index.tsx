import NavBar from "../components/_common/nav-bar/nav-bar";
import {PromoSection} from "../components/_main/promo-section";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'react-i18next';
import Goals from "../components/_main/goals-section/goals";
import colors from "../styles/globals/colors";
import Footer from "../components/_common/footer/footer";
import Head from "next/head";
import { LoginModalWindow } from "../components/_common/login-modal-window";
import {useAuthenticateUser} from "../hooks/use-authenticate-user";
import PageWrapper from "../components/_common/page-wrapper/page-wrapper";
import VStack from "../components/_common/flex-stack/v-stack/v-stack";
import BottomImageSection from "../components/_main/bottom-image-section/bottom-image-section";
import {VolunteersSection} from "../components/_main/volunteers-section";
import {CommunitiesAndFriendsSection} from "../components/_main/communities-and-friends-section";
import {useEffect} from "react";
import {axiosApi} from "../utilities/axios-api";


const MainPage = () => {

    const promoImagePath = "/assets/main-page/map-backgroundColor.png";
    const { t } = useTranslation(['main']);
    const { veryDarkGreen } = colors;

    useAuthenticateUser();

    useEffect(()=>{

        (async () => {

            // await mapboxApi.getBucketListObjects({prefix: "_images"})

            //const list = await awsServices.getObjectList({prefix: ""});
            // console.log(list)
            // list.forEach((item)=>{
            //     console.log(item)
            //     console.log(
            //         `https://tbilisi-cleanups-media-dev.s3.eu-west-2.amazonaws.com/${item.Key}`
            //     )
            // })

        })()

    },[])

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
                    <CommunitiesAndFriendsSection/>
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