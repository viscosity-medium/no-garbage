
export interface GeoJsonFeatureSchema {
    id: string
    type: string,
    geometry: {
        type: string,
        coordinates: number[]
    },
    properties: {
        title: string,
        description: string,
        waste_type: string,
    }
}

export type CreateGeoJsonFeatureSchema = ({item}: any) => GeoJsonFeatureSchema

const createGeoJsonFeatureSchema: CreateGeoJsonFeatureSchema = ({item}) => (
    {
        id: item.id,
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: item.location || []
        },
        properties: {
            title: item.description || "",
            description: item.full_description || "",
            waste_type: item.waste_type || "Common waste",
        }
    }
)

export {
    createGeoJsonFeatureSchema
}