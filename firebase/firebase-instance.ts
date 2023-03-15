import { collection, Firestore, getFirestore, query, doc } from "firebase/firestore";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IContextProviderValue } from "../context/context";
import { firebaseConfig } from "../configs/firebase-config";
import { initializeApp } from "firebase/app";
import { FirebaseApp } from "firebase/app";

const firebase: FirebaseApp = initializeApp({...firebaseConfig});
const auth: Auth = getAuth(firebase);
const firestore: Firestore = getFirestore(firebase);
const reportsRef = collection(firestore!, "reports");
const userProviderRef = collection(firestore!, "user_providers");
const usersDocRef = doc(firestore!, "user_providers", "password")
const reportsQuery = query(reportsRef!);
const userProviderQuery = query(userProviderRef!)

const authenticateUser = async ({email, password}) => {

    return await (
        signInWithEmailAndPassword( auth, email, password)
    )
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage)
        })

}

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