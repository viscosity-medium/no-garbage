import {PromoSection} from "../components/_main/promo-section";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'react-i18next';
import Goals from "../components/_main/goals-section/goals";
import colors from "../styles/globals/colors";
import Footer from "../components/_common/footer/footer";
import {LoginModalWindow} from "../components/_common/login-modal-window";
import PageWrapper from "../components/_common/page-wrapper/page-wrapper";
import VStack from "../components/_common/flex-stack/v-stack/v-stack";
import BottomImageSection from "../components/_main/bottom-image-section/bottom-image-section";
import {VolunteersSection} from "../components/_main/volunteers-section";
import {CommunitiesAndFriendsSection} from "../components/_main/communities-and-friends-section";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getMainPageDynamicInfo} from "./main-page/model/main-page.selectors";


const MainPage = () => {

    const promoImagePath = "/assets/main-page/map-backgroundColor.png";
    const mainPageDynamicInfo = useSelector(getMainPageDynamicInfo);
    const { t } = useTranslation(['main']);

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
        <>
            <PageWrapper
                isAnimated={false}
                backgroundColor={colors.lightGrey}
            >
                <VStack
                    width={"1440px"}
                    margin={"0 auto"}

                >
                    <PromoSection backgroundImage={promoImagePath}/>
                    <Goals
                        goals={mainPageDynamicInfo?.goals}
                    />
                    <VolunteersSection/>
                    <CommunitiesAndFriendsSection/>
                </VStack>
            </PageWrapper>
            <BottomImageSection/>
            <Footer/>
            <LoginModalWindow/>
        </>
    );
};

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main'])),
            passedColors: {
                backgroundColor: colors.veryDarkGreen,
                nameColor1: colors.lightGrey,
                nameColor2: colors.brightLime,
                linkHoverFontColor: colors.veryDarkGreen,
                linkHoverBackground: colors.backgroundMilk,
                profileFontColor: colors.backgroundMilk,
            }
        },
    }
}


export default MainPage;