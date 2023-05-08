import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosApi} from "../../../../utilities/axios-api";

interface Props {
    filesToUpload: {
        [key: string]: File
    }
}

const uploadMapFilesToTheServer = createAsyncThunk(
    "mapbox/upload-files-on-server",
    async (props: Props) => {

        const {filesToUpload} = props;
        const formData = new FormData;
        await Object.keys(filesToUpload).forEach((key)=>{
            console.log(filesToUpload[key])
            formData.append("files", filesToUpload[key])
        })
        for (const pair of formData.entries() as any) {

        }
        await axiosApi.uploadFilesOnServer({formData})
    }
)

export {
    uploadMapFilesToTheServer
}