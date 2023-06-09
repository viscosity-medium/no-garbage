import {AxiosInstance} from "axios";
import {
    axiosInstance,
    axiosMultipartInstance,
    axiosStreamInstance,
    onAxiosUploadHandler
} from "../configs/axios-config";

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
    axiosFiles: AxiosInstance
    axiosStream: AxiosInstance

    constructor() {
        this.axios = axiosInstance
        this.axiosFiles = axiosMultipartInstance
        this.axiosStream = axiosStreamInstance
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

    async uploadFilesOnServer({formData}: {formData: any}){

        const progressHandler = () => {

        }

        await this.axiosFiles.post("/upload-files-on-server", formData);

    }

    async uploadChunksOnServer({chunk, urlParams}: {chunk: string | ArrayBuffer, urlParams}){

        const {
            name,
            type,
            size,
            totalChunks,
            currentChunk,
            sessionUniqueId,
            userSessionInfo,
            fileList
        } = urlParams;

        const params = new URLSearchParams();

        params.set("name", name);
        params.set("type", type);
        params.set("size", size);
        params.set("totalChunks", totalChunks);
        params.set("currentChunk", currentChunk);
        params.set("sessionUniqueId", sessionUniqueId);
        params.set("userSessionInfo", JSON.stringify(userSessionInfo));
        params.set("fileList", JSON.stringify(fileList))


        try {
            await this.axiosStream.post(`/upload-files-on-server/chunks?${params.toString()}`, chunk)
        }
        catch(err){
            console.log("Pizdec")
        }


    }

}

const axiosApi = new AxiosApi();

export {
    axiosApi
}