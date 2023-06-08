import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchFilesByChunks} from "./helpers/map-files-handler.helper";

interface ChunkProps {
    filesToUpload: {
        [p: string]: {
            file: File,
            progressBar: number
        }
    },
    dispatch: any
}

const uploadMapFilesToTheServerByChunks = createAsyncThunk(
    "mapbox/upload-files-on-server-by-chunks",
    async (props: ChunkProps) => {
        const {
            filesToUpload, dispatch
        } = props;
        await fetchFilesByChunks({ filesToUpload, dispatch })
    }
)

export {
    uploadMapFilesToTheServerByChunks
}