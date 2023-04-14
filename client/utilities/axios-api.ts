import axios, {AxiosInstance} from "axios";

interface BucketListProperties {
    prefix?: string
}

export interface PhotoFileList {
    url: string
    previewImageUrl: string
}

export interface FileListProperties {
    fileList: PhotoFileList[]
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4142/server-api',
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    }
});

class AxiosApi {

    axios: AxiosInstance

    constructor() {
        this.axios = axiosInstance
    }

    async getBucketListObjects({prefix}: BucketListProperties){

        await this.axios.get( "/get-bucket-list-object", {
            params: { prefix }
        });

    }


    async processTheFileListAndSaveThemIntoBucket({fileList}: FileListProperties){

        await this.axios.post( "/process-the-file-list-and-save-them-into-bucket", {
            fileList
        });

    }


}

const axiosApi = new AxiosApi();

export {
    axiosApi
}