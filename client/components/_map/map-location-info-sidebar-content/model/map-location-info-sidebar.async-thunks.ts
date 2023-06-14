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
    textAreaValue: any
}

const uploadMapFilesToTheServerByChunks = createAsyncThunk(
    "mapbox/upload-files-on-server-by-chunks",
    async ({filesToUpload, dispatch, sessionUniqueId, userMarkerProperties, textAreaValue}: ChunkProps) => {
        await fetchFilesByChunks({ filesToUpload, dispatch, sessionUniqueId, userMarkerProperties, textAreaValue})
    }
)

export {
    uploadMapFilesToTheServerByChunks
}