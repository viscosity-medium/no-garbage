import {AxiosInstance} from "axios";
import {
    axiosInstance,
    axiosMultipartInstance,
    axiosStreamInstance,

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

        const coordinates = {
            lon: userMarkerProperties.coordinates[0],
            lat: userMarkerProperties.coordinates[1]
        }

        console.log(coordinates)

        const params = {
            id: id,
            name: name,
            extension: extension,
            type: type,
            size: size,
            totalChunks: totalChunks,
            currentChunk: currentChunk,
            sessionUniqueId: sessionUniqueId,
            userSessionInfo: JSON.stringify(userSessionInfo),
            fileList: JSON.stringify(fileList),
            location: userMarkerProperties.name,
            coordinates: JSON.stringify(coordinates),
            description: textAreaValue,
            wasteType: wasteType,
        };

        try {
            await this.axiosStream.post(
                `/upload-files-on-server/chunks?${params.toString()}`,
                chunk,
                {params}
            );
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