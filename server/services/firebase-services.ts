import { IFirebaseInstance } from "../types/firebase-types";
import { firebaseInstance } from "../firebase/firebase-instance";
import { getDocs, query } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid';


class FirebaseServices {

    firebaseInstance: IFirebaseInstance

    constructor({firebaseInstance}) {
        this.firebaseInstance = firebaseInstance
    }

    async getAllFirebaseCollections(){

        const {reportsRef} = this.firebaseInstance;
        const firebaseQuery = query(reportsRef!);
        const querySnapshots = await getDocs(firebaseQuery);
        
        return querySnapshots.docs.map(doc => doc.data());

    }

    async rewriteFirebaseCollectionsPhotoPath({collections}){

        const allFirebaseCollections = await this.getAllFirebaseCollections();
        const photos = allFirebaseCollections.map(collection => {
            console.log(collection)
        });
        
        return allFirebaseCollections;

    }

    async writeDocumentToFirebaseReportsCollection({firebaseDocumentInfo}){

        const db = this.firebaseInstance.firestore;
        const documentId = uuidv4().toUpperCase();
        await setDoc(doc(db, 'reports', documentId), firebaseDocumentInfo);

    }

}

const firebaseServices = new FirebaseServices({firebaseInstance});

export {
    firebaseServices
}