import Google from "next-auth/providers/google";
import {AuthOptions} from "next-auth";
import {FirebaseAdapter} from "@next-auth/firebase-adapter"
import {systemVariables} from "../system/system";
import {firebaseInstance} from "../firebase/firebase-instance";

export const authConfig: AuthOptions = {
    providers: [
        Google({
            clientId: systemVariables.firebaseDevWebClientId,
            clientSecret: systemVariables.firebaseDevWebClientSecret
        })
    ],
    adapter: FirebaseAdapter(firebaseInstance.firestore)
}