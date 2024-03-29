import path from "path";
import { Request, Response } from 'express';
import { awsServices } from "../services/aws-services";
import {AWSServicesProps} from "../types/services-types";
import {systemVariables} from "../system/system";
import {utilities} from "../utilities/utilities";

const {rootDir} = systemVariables

class AwsController {

    async getBucketListObjects (req: Request, res: Response){

        try {

            const { prefix } = req.query as AWSServicesProps;
            const response = await awsServices.getBucketListObjects({prefix});

            return res.json(response);

        }

        catch (err) {
            console.log(err)
        }

    }

    async uploadFilesIntoBucket (req: Request, res: Response){

        try {

            const { fileList } = req.query as AWSServicesProps;
            const fileName = "fileName";

            const response = await awsServices.uploadFilesIntoBucket({ fileList });

            return res.json(response);

        }

        catch (err) {
            console.log(err)
        }

    }

    async processFilesListAndSaveThemIntoBucket (req: Request, res: Response){

        try {

            const { fileList } = req.body as AWSServicesProps;
            //console.log(fileList)
            const response = await awsServices.processTheFileListAndSaveThemIntoBucket({fileList});

            return res.json({0: ""});

        }

        catch (err) {
            console.log(err)
        }

    }

}

const awsController = new AwsController();

export {awsController}