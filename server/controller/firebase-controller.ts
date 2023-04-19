import path from "path";
import { Request, Response } from 'express';
import { awsServices } from "../services/aws-services";
import {AWSServicesProps} from "../types/services-types";
import {systemVariables} from "../system/system";
import {utilities} from "../utilities/utilities";
import {firebaseServices} from "../services/firebase-services";

const {rootDir} = systemVariables

class FirebaseController {

    async getAllFirebaseCollections(req: Request,res: Response){

        const data = await firebaseServices.getAllFirebaseCollections();
        return res.json(data);

    }

    async rewriteFirebaseCollectionsPhotoPath(req: Request, res: Response){

        const { collections } = req.body;
        const data = await firebaseServices.rewriteFirebaseCollectionsPhotoPath({collections});

        return res.json(data);

    }

}

const firebaseController = new FirebaseController();

export {firebaseController}