import {PromoSection} from "../components/_main/promo-section";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'react-i18next';
import {GoalsSection} from "../components/_main/goals-section";
import colors from "../styles/globals/colors";
import {PageWrapper} from "../components/_common/page-wrapper";
import {VStack} from "../components/_common/flex-stack";
import {useSelector} from "react-redux";
import {getDynamicInfo} from "../components/_layout/layout/model/layout.selectors";
import Main from "../components/_common/main/ui/main";
import {CommunitiesAndFriendsSection} from "../components/_main/communities-and-friends-section";
import {BottomImageSection} from "../components/_main/bottom-image-section";
import {VolunteersSection} from "../components/_main/volunteers-section";
import {Footer} from "../components/_common/footer";


const MainPage = () => {

    const promoImagePath = "/assets/main-page/map-backgroundColor.png";
    const { t } = useTranslation(['main', 'common']);

    return (
        <>
            <Main>
                <PageWrapper
                    isAnimated={false}
                    backgroundColor={colors.lightGrey}
                >
                    <VStack
                        width={"1440px"}
                        margin={"0 auto"}

                    >
                        <PromoSection/>
                        <GoalsSection/>
                        {/*<VolunteersSection/>*/}
                        <CommunitiesAndFriendsSection/>
                    </VStack>
                    <BottomImageSection/>
                </PageWrapper>
            </Main>
            <Footer/>
        </>
    );

};

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main', 'common'])),
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