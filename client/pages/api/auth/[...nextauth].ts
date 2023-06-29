import Google from "next-auth/providers/google";
import NextAuth, {AuthOptions} from "next-auth";
import {systemVariables} from "../../../system/system";
import {firebaseInstance} from "../../../firebase/firebase-instance";
import {FirestoreAdapter} from "@next-auth/firebase-adapter";


export const authConfig: AuthOptions = {
    providers: [
        Google({
            clientId: "107165234014-ec0v42gtrf3heblth2lvuskg5qq489gu.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
    adapter: FirestoreAdapter(firebaseInstance.firestore)
}

export default NextAuth(authConfig);