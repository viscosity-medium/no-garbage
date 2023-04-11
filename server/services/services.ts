import {awsInstance} from "../../aws/aws-instance";
import {systemVariables} from "../../system/system";
import {ListObjectsV2Output} from "aws-sdk/clients/s3";

interface AWSServicesProps {
    prefix?: string
}

interface AWSBucketListItem {
    Key: string,
    ETag: string
    StorageClass: string
    Size: number
    LastModified: Date
}

class AwsServices {

    awsInstance: AWS.S3

    constructor() {
        this.awsInstance = awsInstance
    }

    async getBucketListObjects({prefix}: AWSServicesProps){

        const content: AWSBucketListItem[]= [];

        for await (const name of systemVariables.awsS3BucketNamesArr) {

            const obj: ListObjectsV2Output = await awsInstance.listObjectsV2({
                Bucket: name || "",
                Prefix: prefix || ""
            }).promise();

            if( obj.Contents!.length !== 0 && Array.isArray(obj.Contents) ) {

                const newContent = obj.Contents as AWSBucketListItem[];
                content.push(...newContent)

                break

            }

        }

        return content

    }
}

const awsServices = new AwsServices();

export { awsServices };