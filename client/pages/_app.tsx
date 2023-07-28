import type {AppProps} from 'next/app';
import {appWithTranslation} from 'next-i18next';
import {FC} from "react";
import {Context} from "../context/context";
import {firebaseInstance} from "../firebase/firebase-instance";
import {Provider} from "react-redux";
import {Layout} from "../components/_layout/layout";
import {store} from "../store/store";
import localFont from "@next/font/local";
import "firebase/firestore";
import "firebase/auth";
import '../styles/globals.css';
import "../default.scss";
// import {SessionProvider} from "../configs/providers";


const notoSans = localFont({
    src: '../public/assets/fonts/NotoSans-Regular.woff2',
});

const App: FC<AppProps> = ({
    Component,
    pageProps: {session, ...pageProps} ,

}) => {
    const {passedColors} = pageProps;
    //console.log(session)
    return (
        <>
            <Provider store={store}>
                <Context.Provider
                    value={ firebaseInstance }
                >
                    <Layout
                        passedColors={passedColors}
                        className={notoSans.className}
                    >
                        <Component { ...pageProps } />
                    </Layout>
                </Context.Provider>
            </Provider>
        </>
    )
}
export default appWithTranslation(App)