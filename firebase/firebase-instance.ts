import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../configs/firebase-config";
import { IContextProviderValue } from "../context/context";
import { collection, Firestore, getFirestore, query, doc } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseApp } from "firebase/app";

const firebase: FirebaseApp = initializeApp({...firebaseConfig});
const auth: Auth = getAuth(firebase);
const firestore: Firestore = getFirestore(firebase);
const reportsRef = collection(firestore!, "reports");
const userProviderRef = collection(firestore!, "user_providers");
const usersDocRef = doc(firestore!, "user_providers", "password")
const reportsQuery = query(reportsRef!);
const userProviderQuery = query(userProviderRef!)
const firebaseInstance: IContextProviderValue = {
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