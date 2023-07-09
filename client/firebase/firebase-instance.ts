import {collection, doc, Firestore, getCountFromServer, getFirestore, query} from "firebase/firestore";
import {authenticateFirebaseUser} from "./authenticate-firebase-user";
import {IContextProviderValue} from "../context/context";
import {Auth, getAuth} from "firebase/auth";
import {FirebaseApp} from "firebase/app";
import {initializeApp} from "firebase/app";
import {firebaseDevConfig} from "../configs/firebase-configs";

const firebase: FirebaseApp = initializeApp(firebaseDevConfig);
const firestore: Firestore = getFirestore(firebase);
const auth: Auth = getAuth(firebase);
const reportsRef = collection(firestore, "reports");
const dynamicInfoRef = collection(firestore, "dynamic_info");
const userProviderRef = collection(firestore, "user_providers");
const usersDocRef = doc(firestore!, "user_providers", "password")
const reportsQuery = query(reportsRef!);
const userProviderQuery = query(userProviderRef!);
const authenticateUser = authenticateFirebaseUser({auth});

const firebaseInstance: IContextProviderValue = {
    firebase,
    auth,
    authenticateUser,
    firestore,
    reportsRef,
    userProviderRef,
    dynamicInfoRef,
    reportsQuery,
    userProviderQuery,
    usersDocRef
};

export {
    firebaseInstance
}