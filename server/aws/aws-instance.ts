import {S3Client} from "@aws-sdk/client-s3";
import { systemVariables } from "../system/system";

const credentials = {
    accessKeyId: systemVariables.awsAccessKeyId || "",
    secretAccessKey: systemVariables.awsSecretAccessKey || ""
};
const apiVersion = systemVariables.awsApiVersion;
const region = systemVariables.awsS3Region;

const awsInstance = new S3Client({
    credentials,
    region
})

export {
    awsInstance
}