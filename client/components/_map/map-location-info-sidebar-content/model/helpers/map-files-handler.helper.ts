import {axiosApi} from "../../../../../utilities/axios-api";
import {locationInfoSidebarActions} from "../map-location-info-sidebar.slice";

interface FetchFilesByChunksProps {
    filesToUpload: {
        [p: string]: {
            file: File,
            progressBar: number
        }
    },
    dispatch: any
}

const fetchFilesByChunks = async ({ filesToUpload, dispatch }: FetchFilesByChunksProps) => {

    const filesToUploadNewObject = {...filesToUpload};

     for await (const key of Object.keys(filesToUpload)){

         const file = filesToUpload[key].file;
         const fileReader = new FileReader();
         const chunkSize = 5 * 1024 * 1024;
         const totalChunks = Math.ceil(file.size / chunkSize) - 1;

         await fileReader.readAsArrayBuffer(file);

         if(filesToUpload[key].progressBar !== 100){

             await new Promise((resolve, reject)=>{

                 try {

                     fileReader.onload = async (event: ProgressEvent<FileReader>) => {

                         const data = event!.target!.result!;
                         const filename = `${file.name}`.split(".");
                         const extension = filename.pop();

                         const editedName = `${filename.join(".")
                         }-${
                             new Date().toLocaleString()
                             .replace(/:/gm, ".")
                             .replace(/,\s/gm,"-")
                         }.${
                             extension
                         }`;

                         for (let currentChunk = 0; currentChunk < +totalChunks + 1; currentChunk++) {

                             const chunk = data.slice(currentChunk * chunkSize, (currentChunk + 1) * chunkSize) as never;

                             const urlParams = {
                                 name: editedName,
                                 type: file.type,
                                 size: file.size,
                                 totalChunks,
                                 currentChunk
                             };

                             await axiosApi.uploadChunksOnServer({chunk, urlParams});

                             filesToUploadNewObject[key] = {
                                 file: file,
                                 progressBar: ((currentChunk + 1) / (totalChunks + 1) * 100)
                             };

                             console.log(`${currentChunk + 1} of ${totalChunks + 1}`);

                             if(currentChunk + 1 === totalChunks + 1) {
                                 resolve("");
                             };

                             dispatch(locationInfoSidebarActions.setFilesToUpload({
                                 ...filesToUploadNewObject,
                             }));

                         }

                     }

                 } catch (error) {

                 }

             })

         }

    }

}

export {
    fetchFilesByChunks
}