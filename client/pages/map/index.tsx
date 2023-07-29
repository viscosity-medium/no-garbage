import {Mapbox} from "../../map/ui";
import colors from "../../styles/globals/colors";
import React, {useRef, useState} from "react";
import {LocationInfoSidebar} from "../../components/_common/location-info-sidebar";
import {useDispatch, useSelector} from "react-redux";
import {
    getDataStatus,
    getLocationInfoSidebarVisibility
} from "../../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.selectors";
import {useSwitchMapLocationInfoSidebar} from "../../pages-models/map/model/hooks/use-switch-map-location-info-sidebar";
import {MapLocationInfoSidebarContent} from "../../components/_map/map-location-info-sidebar-content";
import {useInitiateMapSessionId} from "../../pages-models/map/model/hooks/use-initiate-map-session-id";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {FiltersBlock} from "../../components/_map/filters-block";
import {
    hideLocationSidebar
} from "../../components/_map/map-location-info-sidebar-content/model/helpers/map-location-info-sidebar.helpers";
import {getLoginData} from "../../components/_common/login-form/model/login-form.selectors";
import Main from "../../components/_common/main/ui/main";

const MapPage = () => {

    const dispatch = useDispatch();
    const [modalWindowHeight, setModalWindowHeight] = useState(0);
    const visibility = useSelector(getLocationInfoSidebarVisibility);
    const dataStatus = useSelector(getDataStatus);
    const userData = useSelector(getLoginData);
    const upperLevelMapCopy = useRef();
    const onEscapeFunction = hideLocationSidebar({map: upperLevelMapCopy, dispatch, dataStatus});
    const mapInteractivity = userData !== undefined && userData.email && userData.accessToken && userData.refreshToken;

    useSwitchMapLocationInfoSidebar();
    useInitiateMapSessionId();

    return (

        <Main>
            <Mapbox
                size={"full"}
                upperLevelMapCopy={upperLevelMapCopy}
                interactivity={mapInteractivity}
            />
            <FiltersBlock
                map={upperLevelMapCopy}
            />
            {
                userData ? (
                    <LocationInfoSidebar
                        visibility={visibility}
                        modalWindowHeight={`${modalWindowHeight}px`}
                        setModalWindowHeight={setModalWindowHeight}
                        onEscapeFunction={onEscapeFunction}
                        className={"sidebar-scroll-inner"}
                    >
                        <MapLocationInfoSidebarContent
                            map={upperLevelMapCopy}
                        />
                    </LocationInfoSidebar>
                ) : <></>
            }

        </Main>

    );
};

export async function getServerSideProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main', 'map', 'common'])),
            passedColors: {
                backgroundColor: colors.pastelGray,
                nameColor1: colors.lightBlack,
                nameColor2: colors.darkGreen,
                linkHoverFontColor: colors.pastelGray,
                linkHoverBackground: colors.backgroundMilk,
                profileFontColor: colors.backgroundMilk,
            }
        },
    }
}

export default MapPage;