import FiltersBlock from "../../components/_map/filters-block/filters-block";
import NavBar from "../../components/_common/nav-bar/nav-bar";
import {Mapbox} from "../../map/ui";
import colors from "../../styles/globals/colors";
import {Div} from "../../components/_common/custom-image/custom-div.styled";
import PageWrapper from "../../components/_common/page-wrapper/page-wrapper";
import {LoginModalWindow} from "../../components/_common/login-modal-window";
import React, {useEffect, useRef, useState} from "react";
import Head from "next/head";
import {LocationInfoSidebar} from "../../components/_common/location-info-sidebar";
import {useSelector} from "react-redux";
import {
    getLocationInfoSidebarVisibility
} from "../../components/_map/map-location-info-sidebar-content/model/map-location-info-sidebar.selectors";
import {useSwitchMapLocationInfoSidebar} from "./hooks/use-switch-map-location-info-sidebar";
import {MapLocationInfoSidebarContent} from "../../components/_map/map-location-info-sidebar-content";
const MapPage = () => {

    const [modalWindowHeight, setModalWindowHeight] = useState(0);
    const visibility = useSelector(getLocationInfoSidebarVisibility);
    const upperLevelMapCopy = useRef()

    useSwitchMapLocationInfoSidebar();

    return (
        <PageWrapper>
            <Head>
                <meta name="keywords" content="Tbilisi, Georgia, garbage, eco, cleanups"/>
                <meta name="color-scheme" content="light only"/>
                <title>Nogarba.ge</title>
            </Head>
            <NavBar backgroundColor={colors.pastelGray}/>
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
                <FiltersBlock/>
                <LocationInfoSidebar
                    visibility={visibility}
                    modalWindowHeight={`${modalWindowHeight}px`}
                    setModalWindowHeight={setModalWindowHeight}
                >
                    <MapLocationInfoSidebarContent
                        map={upperLevelMapCopy}
                    />
                </LocationInfoSidebar>
            </Div>
            <LoginModalWindow/>
        </PageWrapper>
    );
};

export default MapPage;