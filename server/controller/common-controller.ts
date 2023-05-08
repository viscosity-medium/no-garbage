import {systemVariables} from "../system/system";
import path from "path";
import fs from "fs";
import {Request, Response} from "express";

const {rootDir} = systemVariables

class CommonController {

    async uploadFilesOnServer(req: Request,res: Response){

        // let form = new multiparty.Form();

        console.log(req.body.files)

        // await form.parse(req, (err, fields, files) => {
        //     // console.log(req)
        //     // Object.keys(fields).forEach((name) => {
        //     //     console.log('got field named ' + name);
        //     // });
        // });

        res.json({"status": "ok"});
    }

    async uploadFilesOnServerChunks(req: Request,res: Response){

        try {

            const {
                name,
                type,
                size,
                totalChunks,
                currentChunk
            } = req.query;

            const pathToSave = path.resolve(rootDir, "file-storage", `${name}`);

            fs.appendFileSync(pathToSave, req.body);

            res.json({"status": "ok"});

        } catch (err){
            console.log(err)

        }

    }

}

const commonController = new CommonController();

export {commonController}