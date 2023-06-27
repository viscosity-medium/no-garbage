import type {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';
import {FC} from "react";
import "firebase/firestore";
import "firebase/auth";
import {Context} from "../context/context";
import {firebaseInstance} from "../firebase/firebase-instance";
import {Provider} from "react-redux";
import {store} from "../store/store";
import '../styles/globals.css';
import "../default.scss";
import {Layout} from "../components/_layout/layout";
import {SessionProvider} from "../configs/providers";

const App: FC<AppProps> = ({
    Component,
    pageProps: {session, ...pageProps} ,

}) => {
    const {passedColors} = pageProps;
    console.log(session)
    return (
        <>
            <SessionProvider session={session}>
                <Provider store={store}>
                    <Context.Provider
                        value={ firebaseInstance }
                    >
                        <Layout passedColors={passedColors}>
                            <Component { ...pageProps } />
                        </Layout>
                    </Context.Provider>
                </Provider>
            </SessionProvider>
        </>
    )
}
export default appWithTranslation(App)