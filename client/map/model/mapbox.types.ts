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

export interface GeoJsonData {
    type: string
    features: MapboxSingleFeature[]
}

export interface MapboxSchema {
    geoJsonData: GeoJsonData | "pending" | "non-filled" | "error"
    userMarkerIsSet: boolean
    geoJsonMarkers: any[]

}