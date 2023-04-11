import {collection, doc, Firestore, getFirestore, query} from "firebase/firestore";
import {FirebaseApp, initializeApp} from "firebase/app";
import {authenticateFirebaseUser} from "./authenticate-firebase-user";
import {IContextProviderValue} from "../context/context";
import {firebaseConfig} from "../configs/firebase-config";
import {Auth, getAuth} from "firebase/auth";

const firebase: FirebaseApp = initializeApp({...firebaseConfig});
const auth: Auth = getAuth(firebase);
const firestore: Firestore = getFirestore(firebase);
const reportsRef = collection(firestore, "reports");
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
    reportsQuery,
    userProviderQuery,
    usersDocRef
};

export {
    firebaseInstance
}