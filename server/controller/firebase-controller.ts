import {Request, Response} from 'express';
import {systemVariables} from "../system/system";
import {firebaseServices} from "../services/firebase-services";
import {firebaseAdminInstance} from "../firebase/firebase-admin";
import firebaseFunctions from "firebase-functions";


const {rootDir} = systemVariables

class FirebaseController {

    async getAllFirebaseCollections(req: Request,res: Response){

        const documentRefProp = req.body;
        const data = await firebaseServices.getAllFirebaseDocuments({
            documentRefProp
        });
        console.log(data.length)
        return res.json(data);

    }

    async getSpecificFirebaseCollections(req: Request, res: Response){

       const queryParams = req.query;
       const data = await firebaseServices.getSpecificFirebaseCollections({queryParams});

       return res.json(data);

    }

    async deleteUnnecessaryFirebaseDocuments(req: Request,res: Response){

        await firebaseServices.deleteUnnecessaryFirebaseDocuments();
        return res.json({"ok": "ok"});

    }

    async rewriteFirebaseCollectionsPhotoPath(req: Request, res: Response){

        const { collections } = req.body;
        const data = await firebaseServices.rewriteFirebaseCollectionsPhotoPath({collections});

        return res.json(data);

    }

    async createFirebaseGeoJsonDocumentsFromReports(req: Request, res: Response){

        const data = await firebaseServices.createFirebaseGeoJsonDocumentsFromReports();
        return res.json(data);

    }

    async updateFirebaseReportAndGeoJson(req: Request, res: Response){

        const {modalForm} = req.body;
        const response = await firebaseServices.updateFirebaseReportAndGeoJson({modalForm});

        return res.json(response);

    }

}

const firebaseController = new FirebaseController();

export {firebaseController}