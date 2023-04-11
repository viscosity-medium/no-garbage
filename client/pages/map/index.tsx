import FiltersBlock from "../../components/_map/filters-block/filters-block";
import NavBar from "../../components/_common/nav-bar/nav-bar";
import Mapbox from "../../map/mapbox";
import colors from "../../styles/globals/colors";
import {Div} from "../../components/_common/custom-image/custom-div.styled";
import Sidebar from "../../components/_common/sidebar/sidebar";
import PageWrapper from "../../components/_common/page-wrapper/page-wrapper";
import {LoginModalWindow} from "../../components/_common/login-modal-window";
import React from "react";
import Head from "next/head";

const MapPage = () => {
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
                <Mapbox size={"full"}/>
                <FiltersBlock/>
                <Sidebar
                    position={"absolute"}
                    top={"0"}
                    right={"0"}
                    sidebarWidth={["400px"]}
                    sidebarType={"static"}
                    color={colors.mapSidebarColor}
                />
            </Div>
            <LoginModalWindow/>
        </PageWrapper>
    );
};

export default MapPage;