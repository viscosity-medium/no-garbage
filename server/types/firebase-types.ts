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

interface Media {
    id: string
    preview_image_url: string
    url: string
}

interface ModalFormDataModel {
    description: string,
    full_description: string,
    status: string,
    community: string,
    announcement: string,
    location: {
        lat: number,
        lon: number
    }
    meet_up: {
        date: string,
        time: string,
        description: string,
    },
    modified_on: number,
    waste_type: string
    photos: Media[]
    videos: Media[]
}

export type CreateModalFormDataModel = ({modalForm}) => {[key: string]: any};
export type SortedModalForm = (ModalFormDataModel) => {[key: string]: any};