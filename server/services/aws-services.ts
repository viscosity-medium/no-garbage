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

    async uploadFilesIntoBucket({fileName}){

        const input = {
            Bucket: systemVariables.awsS3BucketName,
            Key: "_images/test-file.jpg"
        }
        const command = new PutObjectCommand(input)

        try {
            const response = await awsInstance.send(command);
            console.log(response);
        } catch (err) {
            console.error(err);
        }

    }

    async processTheFileListAndSaveThemIntoBucket({ fileList }: AWSServicesProps){

        const regExp = new RegExp(`^.*${systemVariables.awsS3BucketName}/`);
        const url = fileList?.[0]?.[0].url;
        const fileName = fileList?.[0]?.[0].url.replace(regExp,"")
        const fileExistence = await utilities.checkFileExistence({fileName});

        if( !fileExistence ){

            await utilities.downloadFile({
                url,
                fileName
            });

            await imageConverter.resizeImage({fileName})

        }

        // await  awsInstance.upload({
        //     Bucket: systemVariables.awsS3BucketName,
        //     Key: ""
        // }, () => {});

    }

}

const awsServices = new AwsServices();

export { awsServices };