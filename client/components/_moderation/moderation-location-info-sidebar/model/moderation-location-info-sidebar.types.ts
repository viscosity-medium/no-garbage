export interface ModalForm {
    id: string
    document: any
    description?: string
    fullDescription?: string
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
    videos?: string[]
    meetUpDate: string,
    meetUpTime: string,
    meetUpDescription: string,
    wasteType?: string

}

export type SaveButtonText = "Edit form to save changes" | "Save changes" | "Changes saved!"
export interface SaveButtonState {
    text: SaveButtonText
    isActive: boolean,
    textColor: string
    backgroundColor: string
}

export interface ChosenPhoto {
    id: string
    preview_image_url: string
    url: string
}

export interface ModerationLocationInfoSidebarSchema {
    modalVisibility: boolean
    modalContent: ModalForm
    chosenPhoto: ChosenPhoto
    saveButtonState: SaveButtonState
}