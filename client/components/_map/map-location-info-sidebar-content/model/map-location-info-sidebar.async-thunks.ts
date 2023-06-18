import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchFilesByChunks} from "./helpers/map-files-handler.helper";

interface ChunkProps {
    filesToUpload: {
        [p: string]: {
            file: File,
            progressBar: number
        }
    },
    dispatch: any,
    sessionUniqueId: string,
    userMarkerProperties: any,
    textAreaValue: any,
    wasteType: any
}

const uploadMapFilesToTheServerByChunks = createAsyncThunk(
    "mapbox/upload-files-on-server-by-chunks",
    async ({filesToUpload, dispatch, sessionUniqueId, userMarkerProperties, textAreaValue, wasteType}: ChunkProps) => {
        await fetchFilesByChunks({ filesToUpload, dispatch, sessionUniqueId, userMarkerProperties, textAreaValue, wasteType })
    }
)

export {
    uploadMapFilesToTheServerByChunks
}