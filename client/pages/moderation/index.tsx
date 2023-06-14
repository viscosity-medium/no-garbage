import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {LoginModalWindow} from "../../components/_common/login-modal-window";
import {useCheckIsAuth} from "../../hooks/use-check-is-auth";
import {LocationInfoSidebar} from "../../components/_common/location-info-sidebar";
import {useState} from "react";
import DataWindow from "../../components/_moderation/data-window/data-window";
import {Div} from "../../components/_common/custom-image/custom-div.styled";
import Sidebar from "../../components/_common/sidebar/sidebar";
import HStack from "../../components/_common/flex-stack/h-stack/h-stack";
import colors from "../../styles/globals/colors";
import {ModalWindowContent} from "../../components/_moderation/moderation-location-info-sidebar";
import {useSelector} from "react-redux";
import {
    getModalVisibility
} from "../../components/_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.selectors";

interface Tokens {
    accessToken: string | undefined | null
    refreshToken: string | undefined | null
}

const ModerationPage = () => {

    const [modalWindowHeight, setModalWindowHeight] = useState(0);
    const modalVisibility = useSelector(getModalVisibility);
    const [tokens, setTokens] = useState<Tokens>({
        accessToken: undefined,
        refreshToken: undefined,
    });

    useCheckIsAuth({ setTokens });

    return (
        <>
            {
                (tokens.accessToken && tokens?.refreshToken) ? (
                   <>
                       <Div
                           zIndex={1}
                           height={"100%"}
                           width={"100%"}
                           position={"relative"}
                       >
                           <HStack
                               justify={"start"}
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
                           <LocationInfoSidebar
                               visibility={modalVisibility}
                               modalWindowHeight={`${modalWindowHeight}px`}
                               setModalWindowHeight={setModalWindowHeight}
                           >
                               <ModalWindowContent/>
                           </LocationInfoSidebar>
                       </Div>
                       <LoginModalWindow/>
                   </>
                )  : <></>
            }
        </>

    )

};

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main', 'moderation'])),
            passedColors: {
                backgroundColor: colors.moderationNavbar,
                nameColor1: colors.lightBlack,
                nameColor2: colors.moderationName2,
                linkHoverFontColor: colors.moderationNavbar,
                linkHoverBackground: colors.backgroundMilk,
                profileFontColor: colors.black,
            }
        },
    }
}

export default ModerationPage;
