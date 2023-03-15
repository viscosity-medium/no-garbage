import {createContext} from "react";
import {FirebaseApp} from "firebase/app";
import {Auth} from "firebase/auth";
import {CollectionReference, DocumentData, Firestore, query} from "firebase/firestore";

export interface IContextProviderValue {
    firebase: FirebaseApp | undefined,
    auth: any | undefined,
    firestore: any | undefined
    authenticateUser: (({ email, password }: { email: any, password: any }) => Promise<void>) | undefined
    reportsRef: CollectionReference<DocumentData> | undefined
    userProviderRef: CollectionReference<DocumentData> | undefined
    reportsQuery: any | undefined
    userProviderQuery: any | undefined
    usersDocRef: any | undefined
}

const contextValue: IContextProviderValue = {
    firebase: undefined,
    auth: undefined,
    firestore: undefined,
    authenticateUser: undefined,
    reportsRef: undefined,
    userProviderRef: undefined,
    reportsQuery: undefined,
    userProviderQuery: undefined,
    usersDocRef: undefined
}
const Context: React.Context<IContextProviderValue> = createContext(contextValue);

export {
    Context
}