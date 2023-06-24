import React, {FC, ReactNode} from 'react';
import NavBar from "../../../_common/nav-bar/nav-bar";
import Head from "next/head";
import PageWrapper from "../../../_common/page-wrapper/page-wrapper";
import {useAuthenticateUser} from "../../../../hooks/use-authenticate-user";
import {useFetchDynamicInfo} from "../../../../pages/main-page/model/main-page.hooks";
import {Div} from "../../../_common/custom-image/custom-div.styled";
import {useSelector} from "react-redux";
import {getModalWindowVisibility} from "../../../_common/modal-window/model/modal-window.selectors";

interface LayoutProps {
    children: ReactNode
    passedColors: {
        backgroundColor: string
        nameColor1: string
        nameColor2: string
        linkHoverFontColor: string
        linkHoverBackground: string
        profileFontColor: string
    }
}

const Layout:FC<LayoutProps> = ({children, passedColors}) => {

    const modalWindowVisibility = useSelector(getModalWindowVisibility);
    const zIndex = modalWindowVisibility ? 1000 : -1;

    useAuthenticateUser();
    useFetchDynamicInfo();

    return (
        <>
            <PageWrapper
                isAnimated={true}
            >
                <Head>
                    <meta name="keywords" content="Tbilisi, Georgia, garbage, eco, cleanups"/>
                    <meta name="color-scheme" content="light only"/>
                    <title>Nogarba.ge</title>
                </Head>
                <NavBar
                    backgroundColor={ passedColors.backgroundColor }
                    nameColor1={ passedColors.nameColor1 }
                    nameColor2={ passedColors.nameColor2 }
                    linkHoverFontColor={ passedColors.linkHoverFontColor}
                    linkHoverBackground={ passedColors.linkHoverBackground }
                    profileFontColor={ passedColors.profileFontColor }
                />
                {children}
            </PageWrapper>
            <Div
                zIndex={zIndex}
                position={"absolute"}
                height={"auto"}
                width={"auto"}
                top={"0"}
                left={"0"}
                className={"modal-portal"}
            ></Div>
        </>
    );
};

export {Layout};