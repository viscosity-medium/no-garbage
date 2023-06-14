import {systemVariables} from "../system/system";
import {Request, Response} from "express";
import {commonServices} from "../services/common-services";
import {utilities} from "../utilities/utilities";
import {imageConverter} from "../utilities/images-converter";
import {awsServices} from "../services/aws-services";
import { v4 as uuidv4 } from 'uuid';
import {FirebaseDocumentInfo} from "../firebase/firebase.types";
import {firebaseServices} from "../services/firebase-services";

const {getNonConvertedMediaPath, getConvertedMediaPath} = systemVariables

interface UploadByChunksProps {
    id: string
    name: string,
    type: string,
    extension: string,
    size: string,
    totalChunks: string,
    currentChunk: string,
    sessionUniqueId: string,
    userSessionInfo: string,
    fileList: string,
    textAreaValue: string
    location: string
    coordinates: string
    description: string
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
                id,
                name,
                extension,
                totalChunks,
                currentChunk,
                type,
                size,
                sessionUniqueId,
                userSessionInfo: stringUserSessionInfo,
                fileList: stringFileList,
                location,
                coordinates: stringCoordinates,
                description,
            } = req.query;

            const userSessionInfo = JSON.parse(stringUserSessionInfo);
            const fileList = JSON.parse(stringFileList);
            const coordinates = JSON.parse(stringCoordinates);
            const nonConvertedChunkPath = getNonConvertedMediaPath([`${id}.${extension}`]);

            await utilities.appendFileSync({
                filePath: nonConvertedChunkPath,
                chunk: req.body
            });

            res.json({"status": "ok"});

            // initialize timeout to clean a files if an error has occurred
            if( +userSessionInfo.currentFileIndex === 1 && +currentChunk === 1){

                await utilities.asyncCleanMediaFolders({fileList});

            }

            //processing after retrieving all the chunks
            if(currentChunk === totalChunks && userSessionInfo.currentFileIndex === userSessionInfo.amountOfFiles){

                const {
                    awsS3Region,
                    awsS3BucketName
                } = systemVariables;

                const photos: any = [];
                const videos: any = []

                for await (const currentFile of fileList){

                    const {
                        convertedFilePath,
                        nonConvertedFilePath,
                        convertedPreviewFilePath,
                        fileName,
                        previewFileName
                    } = await utilities.convertAndCompressMediaFiles({currentFile});

                    await awsServices.uploadSingleFileIntoBucket({
                        fileName,
                        filePath: convertedFilePath
                    });
                    await awsServices.uploadSingleFileIntoBucket({
                        fileName: previewFileName,
                        filePath: convertedPreviewFilePath
                    });

                    const folder = new Date().toISOString().replace(/-\d{2}T.*/,"");
                    const fileExtension = fileName.split(".").pop();

                    if(fileExtension === "jpg"){

                        photos.push({

                            id: uuidv4(),
                            url: `https://s3.${awsS3Region}.amazonaws.com/${awsS3BucketName}/${folder}/${fileName}`,
                            preview_image_url: `https://s3.${awsS3Region}.amazonaws.com/${awsS3BucketName}/${folder}/${previewFileName}`

                        });

                    } else if(fileExtension === "mp4"){

                        videos.push({

                            id: uuidv4(),
                            url: `https://s3.${awsS3Region}.amazonaws.com/${awsS3BucketName}/${folder}/${fileName}`,
                            preview_image_url: `https://s3.${awsS3Region}.amazonaws.com/${awsS3BucketName}/${folder}/${previewFileName}`

                        });

                    }

                    await utilities.deleteFileList([
                        nonConvertedFilePath,
                        convertedFilePath,
                        convertedPreviewFilePath
                    ]);

                }


                const firebaseDocumentInfo: FirebaseDocumentInfo = {

                    id: uuidv4(),
                    created_on: Math.floor((new Date()).getTime() / 1000),
                    full_description: description,
                    description: location,
                    location: coordinates,
                    status: "requires moderation",
                    photos,
                    videos,
                    user_name: "Nogarbage.ge",
                    user_provider_id: "Nogarbage.ge",

                };

                await  firebaseServices.writeDocumentToFirebaseReportsCollection({firebaseDocumentInfo})

                //console.log(firebaseDocumentInfo);
                //console.log("Done");
            }

        } catch (err){
            console.log(err)

        }

    }

}

const commonController = new CommonController();

export {commonController}