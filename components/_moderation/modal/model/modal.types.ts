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
export interface SaveButtonState {
    text: SaveButtonText
    isActive: boolean,
    textColor: string
    backgroundColor: string
}

export interface IModalSchema {
    modalVisibility: boolean
    modalContent: IModalContent | undefined
    chosenPhoto: string
    saveButtonState: SaveButtonState
}