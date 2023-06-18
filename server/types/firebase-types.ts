import {FirebaseApp} from "firebase/app";
import {CollectionReference, DocumentData} from "firebase/firestore";

export interface IFirebaseInstance {
    firebase: FirebaseApp | undefined,
    auth: any | undefined,
    firestore: any | undefined
    reportsRef: CollectionReference<DocumentData> | undefined
    geoJsonFeaturesRef: CollectionReference<DocumentData> | undefined
    userProviderRef: CollectionReference<DocumentData> | undefined
    reportsQuery: any | undefined
    userProviderQuery: any | undefined
    usersDocRef: any | undefined
}

export interface FirebaseCollection {
    photos?: [
        url: string,
        preview_image_url:  string,
        id: string
    ]
}