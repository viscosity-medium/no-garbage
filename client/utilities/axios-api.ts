import {AxiosInstance} from "axios";
import {axiosInstance} from "../configs/axios-config";

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