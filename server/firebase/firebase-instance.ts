import {collection, doc, Firestore, getFirestore, query} from "firebase/firestore";
import {FirebaseApp, initializeApp} from "firebase/app";
import {firebaseDevConfig, firebaseProdConfig} from "./firebase-configs";
import {Auth, getAuth} from "firebase/auth";
import {IFirebaseInstance} from "../types/firebase-types";
import {systemVariables} from "../system/system";

const firebaseConfig = systemVariables.mode === "PRODUCTION" ? firebaseProdConfig : firebaseDevConfig;
const firebase: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(firebase);
const firestore: Firestore = getFirestore(firebase);
const reportsRef = collection(firestore, "reports");
const geoJsonFeaturesRef = collection(firestore, "geo_json_features");
const userProviderRef = collection(firestore, "user_providers");
const usersDocRef = doc(firestore!, "user_providers", "password")
const reportsQuery = query(reportsRef!);
const userProviderQuery = query(userProviderRef!);

const firebaseInstance: IFirebaseInstance = {
    firebase,
    auth,
    firestore,
    reportsRef,
    geoJsonFeaturesRef,
    userProviderRef,
    reportsQuery,
    userProviderQuery,
    usersDocRef
};

export {
    firebaseInstance
}