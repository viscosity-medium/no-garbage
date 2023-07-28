import {createContext} from "react";
import {FirebaseApp} from "firebase/app";
import {CollectionReference, DocumentData} from "firebase/firestore";

export interface IContextProviderValue {
    firebase: FirebaseApp | undefined,
    auth: any | undefined,
    firestore: any | undefined
    authenticateUser: (({ email, password, token }: { email: any, password: any, token: any }) => Promise<void>) | undefined
    reportsRef: CollectionReference<DocumentData> | undefined
    reportsCountPromise?: Promise<number> | undefined
    userProviderRef: CollectionReference<DocumentData> | undefined
    dynamicInfoRef: CollectionReference<DocumentData> | undefined
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
    dynamicInfoRef: undefined,
    reportsQuery: undefined,
    userProviderQuery: undefined,
    usersDocRef: undefined
}
const Context: React.Context<IContextProviderValue> = createContext(contextValue);

export {
    Context
}