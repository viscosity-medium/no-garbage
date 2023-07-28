import React, {FC} from 'react';
import {Header} from "../../../_common/nav-bar";
import Head from "next/head";
import {PageWrapper} from "../../../_common/page-wrapper";
import {useAuthenticateUser} from "../../../../hooks/use-authenticate-user";
import {Div} from "../../../_common/custom-image/ui/custom-div.styled";
import {useSelector} from "react-redux";
import {getModalWindowVisibility} from "../../../_common/modal-window/model/modal-window.selectors";
import {LoginForm} from "../../../_common/login-form";
import {ModalWindow} from "../../../_common/modal-window";
import {PageProgressBar} from "../../page-progress-bar";
import {useRouter} from "next/router";
import {definePageProgressBarColor} from "../model/layout.helpers";
import {useFetchDynamicInfo} from "../model/layout.hooks";
import {LayoutProps} from "../model/layout.types";
import {firebaseInstance} from "../../../../firebase/firebase-instance";

const Layout:FC<LayoutProps> = ({children, passedColors}) => {

    const {pathname, push} = useRouter();
    const progressBarColor = definePageProgressBarColor({pathname});

    const modalWindowVisibility = useSelector(getModalWindowVisibility);
    const zIndex = modalWindowVisibility ? 1000 : -1;
    const opacity = (!firebaseInstance.auth.currentUser && pathname.match("/moderation")) ? "0" : "1";

    useAuthenticateUser();
    useFetchDynamicInfo();

    return (
        <div style={{
            opacity: opacity
        }}>
            <PageWrapper
                isAnimated={true}
            >
                <Head>
                    <meta name="keywords" content="Tbilisi, Georgia, garbage, eco, cleanups"/>
                    <meta name="color-scheme" content="light only"/>
                    <title>Nogarba.ge</title>
                </Head>
                <PageProgressBar
                    progressBarColor={progressBarColor}
                />
                <Header
                    backgroundColor={ passedColors?.backgroundColor }
                    nameColor1={ passedColors?.nameColor1 }
                    nameColor2={ passedColors?.nameColor2 }
                    linkHoverFontColor={ passedColors?.linkHoverFontColor}
                    linkHoverBackground={ passedColors?.linkHoverBackground }
                    profileFontColor={ passedColors?.profileFontColor }
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
            <ModalWindow>
                <LoginForm/>
            </ModalWindow>
        </div>
    );
};

export {Layout};