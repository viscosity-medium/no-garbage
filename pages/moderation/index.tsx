import React, {useCallback, useState} from 'react';
import NavBar from "../../components/_common/nav-bar/nav-bar";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import colors from "../../styles/globals/colors";
import Sidebar from "../../components/_common/sidebar/sidebar";
import DataWindow from "../../components/_moderation/data-window/data-window";
import HStack from "../../components/_common/flex-stack/h-stack/h-stack";
import ModalWindow from "../../components/_moderation/modal/modal-window/modal-window";

const ModerationPage = () => {

    return (
        <>
            <NavBar backgroundColor={colors.wildBlueYonder}/>
            <HStack
                justify={"space-between"}
                align={"start"}
                width={"100%"}
                height={"100%"}
                wrap={"no-wrap"}
            >
                <Sidebar
                    position={"relative"}
                    sidebarWidth={["160px", "70px"]}
                    sidebarType={"dynamic"}
                    color={colors.moderationSidebarColor}
                />
                <DataWindow/>
            </HStack>
            <ModalWindow/>
        </>
    );
};

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main', 'moderation'])),
        },
    }
}

export default ModerationPage;