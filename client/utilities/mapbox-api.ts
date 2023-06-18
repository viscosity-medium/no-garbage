import axios, {AxiosInstance} from "axios";
import {GeoJsonData} from "../map/model/mapbox.types";
import {systemVariables} from "../system/system";

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

const mapboxGeocodingInstance = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places"
})

class MapBoxApi {

    axios: AxiosInstance
    geocoding: AxiosInstance
    mapboxAccessToken: string

    constructor() {
        this.axios = axiosInstance
        this.geocoding = mapboxGeocodingInstance
        this.mapboxAccessToken = systemVariables.mapboxAccessToken
    }

    async getMapboxGeoJsonData(){
        return await this.axios.get<GeoJsonData>("get-mapbox-geo-json");
    }

    async getMapboxLocationInfo({coordinates, language}){
        try {
            const editedLanguage = language === "ge" ? "ka" : language
            return await this.geocoding.get(`${coordinates}.json?language=${editedLanguage}&limit=1&access_token=${this.mapboxAccessToken}`);
        } catch (err){

        }

    }

}


const mapboxApi = new MapBoxApi();

export {
    mapboxApi
}