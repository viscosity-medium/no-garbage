import {systemVariables} from "../system/system";
import path from "path";
import fs from "fs";
import {Request, Response} from "express";
import {commonServices} from "../services/common-services";
import {utilities} from "../utilities/utilities";

const {rootDir} = systemVariables

interface UploadByChunksProps {
    name: string,
    type: string,
    size: string,
    totalChunks: string,
    currentChunk: string,
    sessionUniqueId: string,
    userSessionInfo: string,
    fileList: string
}
type UploadByChunksRequestBody = string | Uint8Array

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

    async uploadFilesOnServerByChunks(req: Request<{}, {}, UploadByChunksRequestBody, UploadByChunksProps>, res: Response){

        try {
            const {
                name,
                type,
                size,
                totalChunks,
                currentChunk,
                sessionUniqueId,
                userSessionInfo: stringUserSessionInfo,
                fileList: stringFileList
            } = req.query;

            const userSessionInfo = JSON.parse(stringUserSessionInfo);
            const fileList = JSON.parse(stringFileList);
            const filePath = path.resolve(rootDir, "file-storage", "non-converted", `${name}`);


            fs.appendFileSync(filePath, req.body);

            // console.log(JSON.parse(userSessionInfo as any))
            // console.log(JSON.parse(fileList as any))
            // console.log(`${currentChunk} / ${totalChunks} ___ ${sessionUniqueId}`)

            res.json({"status": "ok"});

            if(currentChunk === totalChunks && userSessionInfo.currentFileIndex === userSessionInfo.amountOfFiles){

                for await (const currentFileName of fileList){

                    const filenameWithoutExtension = currentFileName.split(".").slice(0,-1).join(".");

                    const nonCompressedFilePath = path.resolve(rootDir, "file-storage", "non-converted", `${currentFileName}`);
                    const compressedFilePath = path.resolve(rootDir, "file-storage", "converted", `${filenameWithoutExtension}.mp4`)

                    await commonServices.convertVideo({
                        fileName: name,
                        inputPath: nonCompressedFilePath,
                        outputPath: compressedFilePath
                    });

                    await utilities.deleteFile({
                        filePath: nonCompressedFilePath
                    })

                    console.log(currentFileName);
                }
                console.log("Done")
            }

        } catch (err){
            console.log(err)

        }

    }

}

const commonController = new CommonController();

export {commonController}