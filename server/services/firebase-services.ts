import {getDocs, query} from "firebase/firestore";
import {firebaseInstance} from "../firebase/firebase-instance";
import {IFirebaseInstance} from "../types/firebase-types";


class FirebaseServices {

    firebaseInstance: IFirebaseInstance

    constructor({firebaseInstance}) {
        this.firebaseInstance = firebaseInstance
    }

    async getAllFirebaseCollections(){

        const { reportsRef } = this.firebaseInstance;
        const firebaseQuery = query(reportsRef!)
        const querySnapshots = await getDocs(firebaseQuery);
        return querySnapshots.docs.map(doc => doc.data());

    }

}

const firebaseServices = new FirebaseServices({firebaseInstance});

export {
    firebaseServices
}