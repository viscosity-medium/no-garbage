import axios, {AxiosInstance} from "axios";
import {GeoJsonData} from "../map/model/mapbox.types";

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

class MapBoxApi {

    axios: AxiosInstance

    constructor() {
        this.axios = axiosInstance
    }


    async getMapboxGeoJsonData(){
        const mapboxGeoJsonData = await this.axios.get<GeoJsonData>("get-mapbox-geo-json");
        return mapboxGeoJsonData
    }

}

const mapboxApi = new MapBoxApi();

export {
    mapboxApi
}