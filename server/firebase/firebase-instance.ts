import {collection, doc, Firestore, getFirestore, query} from "firebase/firestore";
import {FirebaseApp, initializeApp} from "firebase/app";
import {firebaseProdConfig} from "./firebase-configs";
import {Auth, getAuth} from "firebase/auth";
import {IFirebaseInstance} from "../types/firebase-types";

const firebase: FirebaseApp = initializeApp(firebaseProdConfig);
const auth: Auth = getAuth(firebase);
const firestore: Firestore = getFirestore(firebase);
const reportsRef = collection(firestore, "reports");
const userProviderRef = collection(firestore, "user_providers");
const usersDocRef = doc(firestore!, "user_providers", "password")
const reportsQuery = query(reportsRef!);
const userProviderQuery = query(userProviderRef!);

const firebaseInstance: IFirebaseInstance = {
    firebase,
    auth,
    firestore,
    reportsRef,
    userProviderRef,
    reportsQuery,
    userProviderQuery,
    usersDocRef
};

export {
    firebaseInstance
}