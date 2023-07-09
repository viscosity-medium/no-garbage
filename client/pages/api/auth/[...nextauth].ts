import Google from "next-auth/providers/google";
import NextAuth, {AuthOptions} from "next-auth";
import {systemVariables} from "../../../system/system";
import {FirestoreAdapter, initFirestore} from "@next-auth/firebase-adapter";
import {credential} from "firebase-admin";

const firestore = initFirestore({
    credential: credential.cert({
        projectId: systemVariables.firebaseAdminDevProjectId,
        clientEmail: systemVariables.firebaseAdminDevClientEmail,
        privateKey: systemVariables.firebaseAdminDevPrivateKey.replace(/\\n/gm, "\n"),
    }),
});

export const authConfig: AuthOptions = {

    providers: [
        Google({
            clientId: systemVariables.authGoogleClientId,
            clientSecret: systemVariables.authGoogleClientSecret
        }),

    ],
    adapter: FirestoreAdapter(firestore),
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log(credentials)
            //const extraUser =firebaseInstance.authenticateUser?.({email, password: ""})
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, user, token }) {
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token
        }
    }
}
export default NextAuth(authConfig);