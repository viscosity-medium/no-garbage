import {createContext} from "react";
import {FirebaseApp} from "firebase/app";
import {Auth} from "firebase/auth";
import {CollectionReference, DocumentData, Firestore, query} from "firebase/firestore";

export interface IContextProviderValue {
    firebase: FirebaseApp | undefined,
    auth: Auth | undefined,
    firestore: any | undefined
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