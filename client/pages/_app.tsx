import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { FC } from "react";
import "firebase/firestore";
import "firebase/auth";
import { Context } from "../context/context";
import { firebaseInstance } from "../firebase/firebase-instance";
import {Provider} from "react-redux";
import {store} from "../store/store";
import '../styles/globals.css';
import "../default.scss";
import {Layout} from "../components/_layout/layout";

// @ts-ignore
const App: FC<AppProps> = ({ Component, pageProps }) => {
    const {passedColors} = pageProps;
    return (
        <Provider store={store}>
            <Context.Provider
                value={ firebaseInstance }
            >
                <Layout passedColors={passedColors}>
                    <Component { ...pageProps } />
                </Layout>
            </Context.Provider>
        </Provider>
    )

}
export default appWithTranslation(App)