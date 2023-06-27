import {Mapbox} from "../../map/ui";
import colors from "../../styles/globals/colors";
import {Div} from "../../components/_common/custom-image/ui/custom-div.styled";
import React, {useRef, useState} from "react";
import {LocationInfoSidebar} from "../../components/_common/location-info-sidebar";
import {useDispatch, useSelector} from "react-redux";
import {
    getDataStatus,
    getLocationInfoSidebarVisibility
} from "../../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.selectors";
import {useSwitchMapLocationInfoSidebar} from "./model/hooks/use-switch-map-location-info-sidebar";
import {MapLocationInfoSidebarContent} from "../../components/_map/map-location-info-sidebar-content";
import {useInitiateMapSessionId} from "./model/hooks/use-initiate-map-session-id";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {FiltersBlock} from "../../components/_map/filters-block";
import {
    moderationLocationInfoSidebarSliceActions
} from "../../components/_moderation/moderation-location-info-sidebar/model/moderation-location-info-sidebar.slice";
import {
    locationInfoSidebarActions
} from "../../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.slice";
import {
    hideLocationSidebar
} from "../../components/_map/map-location-info-sidebar-content/model/helpers/map-location-info-sidebar.helpers";

const MapPage = () => {

    const dispatch = useDispatch();
    const upperLevelMapCopy = useRef();
    const visibility = useSelector(getLocationInfoSidebarVisibility);
    const dataStatus = useSelector(getDataStatus);
    const [modalWindowHeight, setModalWindowHeight] = useState(0);
    const onEscapeFunction = hideLocationSidebar({map: upperLevelMapCopy, dispatch, dataStatus});

    useSwitchMapLocationInfoSidebar();
    useInitiateMapSessionId();

    return (
        <>
            <Div
                zIndex={2}
                height={"100%"}
                width={"100%"}
                position={"relative"}
            >
                <Mapbox
                    size={"full"}
                    upperLevelMapCopy={upperLevelMapCopy}
                />
                <FiltersBlock
                    map={upperLevelMapCopy}
                />
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
            </Div>
        </>
    );
};

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main', 'map'])),
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