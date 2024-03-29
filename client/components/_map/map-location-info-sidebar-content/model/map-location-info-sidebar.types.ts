export interface SubmitButtonState {
    topScroll: string
}

export interface LocationInfoSidebarSchema {
    modalVisibility: boolean
    userMarkerProperties: {
        name: string
        coordinates: string[]
    }
    filesToUpload: {
        [key: string]: {
            file: File,
            progressBae: number
        }
    }
    dropboxProperties: {
        title: string,
        description: string,
        subDescription: string
        boxShadow: string
    }
    textAreaContent: string
    submitButtonState: SubmitButtonState
    dataStatus: "init" | "pending" | "success" | "reject"
    wasteType: string | undefined
}