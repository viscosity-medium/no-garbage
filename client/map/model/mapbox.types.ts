import {AxiosResponse} from "axios";

export interface MapboxSingleFeature{
    type: string,
    geometry: {
        type: string,
        coordinates: number[]
    },
    properties: {
        title: string,
        description: string
    }
}

export interface MapboxGeoJsonData {
    type: string
    features: MapboxSingleFeature[]
}

export interface MapboxSchema {
    mapboxGeoJsonData: MapboxGeoJsonData | "pending" | "non-filled" | "error"

}