import fs from "fs";
import path from "path";
import {systemVariables} from "../system/system";
import {awsInstance} from "../aws/aws-instance";
import {
    S3Client,
    ListObjectsV2Command,
    ListObjectsV2CommandOutput,
    PutObjectCommand
} from "@aws-sdk/client-s3";
import {AWSBucketListItem, AWSServicesProps} from "../types/services-types";
import {utilities} from "../utilities/utilities";
import {imageConverter} from "../utilities/images-converter";

const {rootDir} = systemVariables;

class AwsServices {

    awsInstance: S3Client;

    constructor() {
        this.awsInstance = awsInstance
    }

    async getBucketListObjects({prefix}: AWSServicesProps){

        const content: AWSBucketListItem[] = [];
        const input = {
            Bucket: systemVariables.awsS3BucketName || "",
            Prefix: prefix || "",
        };
        const command = new ListObjectsV2Command(input);
        const output: ListObjectsV2CommandOutput = await awsInstance.send(command)
        const newContent = output.Contents as AWSBucketListItem[];
        content.push(...newContent);

        return content

    }

    async uploadFilesIntoBucket({ fileList }){

        // fileList
        //
        // await fs.readFile(filePath, async (err, data) => {
        //
        //     const input = {
        //         Bucket: systemVariables.awsS3BucketName,
        //         Key: fileName,
        //         Body: data
        //     }
        //     const command = new PutObjectCommand(input)
        //
        //     try {
        //         const response = await awsInstance.send(command);
        //         console.log(response);
        //     } catch (err) {
        //         console.error(err);
        //     }
        //
        // });

    }

    async uploadSingleFileIntoBucket({ fileName, filePath }){

        const fileNameWithFolder = fileName.match(/thumb/) ?
            `_thumb-images/${fileName}` : `_images/${fileName}`;

        await fs.readFile(filePath, async (err, data) => {

            const input = {
                Bucket: systemVariables.awsS3BucketName,
                Key: fileNameWithFolder,
                Body: data
            }
            const command = new PutObjectCommand(input);

            try {
                const response = await awsInstance.send(command);
                console.log(response);
            } catch (err) {
                console.error(err);
            }

        });

    }

    async processTheFileListAndSaveThemIntoBucket({ fileList }: AWSServicesProps){

        for await ( const listItem of fileList! ){
            for await ( const listItemObject of listItem ){

                const objectUrls = Object.keys(listItemObject)

                for await ( const url of objectUrls ){

                    const regExp = new RegExp(`^.*/`);
                    const fileName = listItemObject[url].replace(regExp,"");
                    const filePath = path.resolve(rootDir, "temp", fileName);
                    const fileExistence = await utilities.checkFileExistence({fileName});

                    if( !fileExistence ){

                        await utilities.downloadFile({
                            url: listItemObject[url],
                            fileName
                        });

                        await imageConverter.resizeImage({fileName});
                        await this.uploadSingleFileIntoBucket({fileName, filePath});

                    }

                }

            }
        }


        // await  awsInstance.upload({
        //     Bucket: systemVariables.awsS3BucketName,
        //     Key: ""
        // }, () => {});

    }

}

const awsServices = new AwsServices();

export { awsServices };