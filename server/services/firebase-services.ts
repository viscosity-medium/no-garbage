import {IFirebaseInstance} from "../types/firebase-types";
import {firebaseInstance} from "../firebase/firebase-instance";
import {deleteDoc, doc, getDocs, query, setDoc, updateDoc} from "firebase/firestore";
import {createGeoJsonFeatureSchema, GeoJsonFeatureSchema} from "../firebase/firebase-schemas";
import {
    createFireBaseGeoJsonDoc,
    createFirebaseReportDoc,
    getOnlyEditedValuesFromModalFormData
} from "../utilities/firebase-utilities";


interface GetAllFirebaseDocuments {
    documentRefProp: "reportsRef" | "geoJsonFeaturesRef"
}

class FirebaseServices {

    firebaseInstance: IFirebaseInstance

    constructor({firebaseInstance}) {
        this.firebaseInstance = firebaseInstance;
    }

    async getAllFirebaseDocuments({documentRefProp}: GetAllFirebaseDocuments){

        let documentRef;

        if(documentRefProp === "reportsRef"){
            documentRef = this.firebaseInstance.reportsRef;
        } else if(documentRefProp === "geoJsonFeaturesRef"){
            documentRef = this.firebaseInstance.geoJsonFeaturesRef;
        }

        const firebaseQuery = query(documentRef!);
        const querySnapshots = await getDocs(firebaseQuery);

        return querySnapshots.docs.map(doc => (doc.data())) as any;

    };

    async deleteUnnecessaryFirebaseDocuments(){

        const db = this.firebaseInstance.firestore;
        const {reportsRef} = this.firebaseInstance;
        const firebaseQuery = query(reportsRef!);
        const querySnapshots = await getDocs(firebaseQuery);

        querySnapshots.docs.map( async (document) => {

            if(document.data().geometry){
                console.log("ghjk")
                await deleteDoc(doc(db, "reports", document.id));
            }
            return  document.data()
        });


    };

    async rewriteFirebaseCollectionsPhotoPath({collections}){

        const allFirebaseCollections = await this.getAllFirebaseDocuments({
            documentRefProp: "reportsRef"
        });
        const photos = allFirebaseCollections.map(collection => {
            console.log(collection)
        });
        
        return allFirebaseCollections;

    };

    async writeDocumentToFirebaseReportsCollection({firebaseDocumentInfo}){

        const db = this.firebaseInstance.firestore;
        const documentId = firebaseDocumentInfo.id;

        await setDoc(doc(db, 'reports', documentId), firebaseDocumentInfo);

    };

    async writeDocumentToFirebaseGeoJsonCollection({firebaseGeoJsonDocument}){

        const db = this.firebaseInstance.firestore;
        const documentId = firebaseGeoJsonDocument.id;
        console.log(firebaseGeoJsonDocument);
        await setDoc(doc(db, 'geo_json_features', documentId), firebaseGeoJsonDocument);

    };

    async createFirebaseGeoJsonDocumentsFromReports(){

        const db = this.firebaseInstance.firestore;
        const allDocuments = await this.getAllFirebaseDocuments({
            documentRefProp: "reportsRef"
        });

        const geoJsonFeatures: GeoJsonFeatureSchema[] = [];

        for await (const item of allDocuments) {

            const geoJsonFeature = await new Promise (async (resolve) =>{

                const documentId = item.id;
                const geoJsonFeatureSchema = createGeoJsonFeatureSchema({item});
                await setDoc(doc(db, 'geo_json_features', documentId), geoJsonFeatureSchema);
                geoJsonFeatures.push(geoJsonFeatureSchema)

                resolve(geoJsonFeatureSchema);
            })

        }
        return geoJsonFeatures;
    };

    async updateFirebaseReportAndGeoJson({modalForm}){

        const db = this.firebaseInstance.firestore;
        const reportData = createFirebaseReportDoc({ modalForm });
        const geoJson = createFireBaseGeoJsonDoc({modalForm})
        const reportRef = doc(db, "reports", modalForm.id);
        const geoJsonRef = doc(db, "geo_json_features", modalForm.id);

        await updateDoc(reportRef, reportData);
        await updateDoc(geoJsonRef, geoJson);

        return {
            data: "success"
        };

    };

}

const firebaseServices = new FirebaseServices({firebaseInstance});

export {
    firebaseServices
}