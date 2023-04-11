import AWS from "aws-sdk";
import { systemVariables } from "../system/system";

const credentials = {
    accessKeyId: systemVariables.awsAccessKeyId || "",
    secretAccessKey: systemVariables.awsSecretAccessKey || ""
};
const apiVersion = systemVariables.awsApiVersion;
const region = systemVariables.awsS3Region;

const awsInstance = new AWS.S3({
    credentials,
    apiVersion,
    region
})

export {
    awsInstance
}