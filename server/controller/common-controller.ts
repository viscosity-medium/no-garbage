import {systemVariables} from "../system/system";
import {Request, Response} from "express";

const {rootDir} = systemVariables

class CommonController {

    async uploadFilesOnServer(req: Request,res: Response){

        const { formData } = req.body;
        console.log(formData)
    }

}

const commonController = new CommonController();

export {commonController}