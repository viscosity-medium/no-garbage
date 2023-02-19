import React from 'react';
import NavBar from "../../components/_common/nav-bar/nav-bar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import colors from "../../styles/globals/colors";
import WasteBlock from "../../components/_add-location/waste-block/waste-block";
import VStack from "../../components/_common/flex-stack/v-stack/v-stack";
import TitleBlock from "../../components/_add-location/title-block/title-block";
import MediaUploadBlock from "../../components/_add-location/media-upload-block/media-upload-block";
import InteractiveMap from "../../components/_add-location/interactive-map/interactive-map";
import DescriptionBlock from "../../components/_add-location/description-block/description-block";

const MapPage = () => {
    return (
        <>
            <NavBar
                backgroundColor={colors.pastelGray}
            />
            <VStack
                padding={"72px 580px 63px 96px"}
                background={colors.mapGrayBackground}
            >
                <TitleBlock/>
                <MediaUploadBlock/>
                <InteractiveMap/>
                <WasteBlock/>
                <DescriptionBlock/>
            </VStack>

        </>
    );
};

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main', 'map'])),
        },
    }
}

export default MapPage;