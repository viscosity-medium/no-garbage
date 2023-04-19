import { IFirebaseInstance } from "../types/firebase-types";
import { firebaseInstance } from "../firebase/firebase-instance";
import { getDocs, query } from "firebase/firestore";


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

}

const firebaseServices = new FirebaseServices({firebaseInstance});

export {
    firebaseServices
}