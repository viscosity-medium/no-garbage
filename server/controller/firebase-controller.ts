import path from "path";
import { Request, Response } from 'express';
import { awsServices } from "../services/aws-services";
import {AWSServicesProps} from "../types/services-types";
import {systemVariables} from "../system/system";
import {utilities} from "../utilities/utilities";
import {firebaseServices} from "../services/firebase-services";
import {createGeoJsonFeatureSchema} from "../firebase/firebase-schemas";

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