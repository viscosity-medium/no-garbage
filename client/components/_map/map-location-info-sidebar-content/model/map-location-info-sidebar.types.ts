export interface IModalContent {
    id: string
    document: any
    description?: string
    status?: string
    created?: any
    modified?: any
    announcement?: string
    community?: string
    location: {
        lon: number,
        lat: number
    }
    photos?: string[]

}

export type SaveButtonText = "Edit form to save changes" | "Save changes" | "Changes saved!"
export interface SubmitButtonState {
    topScroll: string
}

export interface ChosenPhoto {
    id: string
    preview_image_url: string
    url: string
}

export interface LocationInfoSidebarSchema {
    modalVisibility: boolean
    userMarkerCoordinates: string[]
    userMarkerLocationName: string
    filesInFormData: {
        [key: string]: File
    }
    dropboxProperties: {
        title: string,
        description: string,
        boxShadow: string
    }
    modalContent: IModalContent | undefined
    submitButtonState: SubmitButtonState
}