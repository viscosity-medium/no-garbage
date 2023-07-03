import Google from "next-auth/providers/google";
import NextAuth, {AuthOptions} from "next-auth";
import {firebaseInstance} from "../../../firebase/firebase-instance";
import {FirestoreAdapter} from "@next-auth/firebase-adapter";
import {systemVariables} from "../../../system/system";
import {adapter} from "next/dist/server/web/adapter";
import {initializeApp} from "firebase/app";
import {firebaseDevConfig} from "../../../configs/firebase-configs";
import {Firestore, getFirestore} from "firebase/firestore";


const firebaseApp = initializeApp(firebaseDevConfig);
const firestore = getFirestore(firebaseApp);

export const authConfig: AuthOptions = {
    //change Authorized JavaScript origins and Authorized redirect URIs on google cloud api and services for prod
    //https://console.cloud.google.com/apis/credentials/oauthclient/107165234014-0juqbbhtkkgpufov4djqf2j1rj0n5hj9.apps.googleusercontent.com?project=dev-nogarbage
    providers: [
        Google({
            clientId: systemVariables.authGoogleClientId,
            clientSecret: systemVariables.authGoogleClientSecret
        }),

    ],
    adapter: FirestoreAdapter(firestore)
}
export default NextAuth(authConfig);