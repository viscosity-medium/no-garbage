export interface MediaObject {
    id: string
    url: string
    preview_image_url: string
}


export interface FirebaseDocumentInfo {
    id: string,
    created_on: number,
    full_description: string,
    description: string,
    location: [
        lon: string,
        lat: string,
    ],
    status: string
    photos: MediaObject[],
    videos: MediaObject[],
    user_name: string,
    user_provider_id: string,
    waste_type: string
}