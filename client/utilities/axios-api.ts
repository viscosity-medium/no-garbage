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
            id,
            name,
            extension,
            type,
            size,
            totalChunks,
            currentChunk,
            sessionUniqueId,
            userSessionInfo,
            fileList,
            userMarkerProperties,
            textAreaValue,
            wasteType = "Common waste"
        } = urlParams;

        const params = new URLSearchParams();
        const coordinates = {
            lat: userMarkerProperties.coordinates[0],
            lon: userMarkerProperties.coordinates[1]
        }

        console.log(name)
        params.set("id", id);
        params.set("name", name);
        params.set("extension", extension);
        params.set("type", type);
        params.set("size", size);
        params.set("totalChunks", totalChunks);
        params.set("currentChunk", currentChunk);
        params.set("sessionUniqueId", sessionUniqueId);
        params.set("userSessionInfo", JSON.stringify(userSessionInfo));
        params.set("fileList", JSON.stringify(fileList));
        params.set("location", userMarkerProperties.name);
        params.set("coordinates", JSON.stringify(coordinates));
        params.set("description", textAreaValue);
        params.set("wasteType", wasteType);



        try {
            await this.axiosStream.post(`/upload-files-on-server/chunks?${params.toString()}`, chunk);
        }
        catch(err){
            console.log(err)
        }


    }

}

const axiosApi = new AxiosApi();

export {
    axiosApi
}