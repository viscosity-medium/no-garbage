import {axiosApi} from "../../../../../utilities/axios-api";
import {locationInfoSidebarActions} from "../map-location-info-sidebar.slice";

interface FetchFilesByChunksProps {
    filesToUpload: {
        [p: string]: {
            file: File,
            progressBar: number
        }
    },
    dispatch: any,
    sessionUniqueId
}

const fetchFilesByChunks = async ({ filesToUpload, dispatch, sessionUniqueId }: FetchFilesByChunksProps) => {

    const filesToUploadNewObject = {...filesToUpload};
    const timeStamp = new Date().toLocaleString();
    const fileList = Object.keys(filesToUpload).reduce((accumulate: string[], current: string) => {

        const filename = `${filesToUpload[current].file.name}`.split(".");
        const extension = filename.pop();
        const editedName = `${filename.join(".")
        }-${
            timeStamp
            .replace(/:/gm, ".")
            .replace(/,\s/gm,"-")
        }.${
            extension
        }`;

        return [...accumulate,editedName ];

    }, []);

     for await (const key of Object.keys(filesToUpload)){

         const file = filesToUpload[key].file;
         const fileReader = new FileReader();
         const chunkSize = 5 * 1024 * 1024;
         const totalChunks = Math.ceil(file.size / chunkSize) - 1;

         await fileReader.readAsArrayBuffer(file);
         dispatch(locationInfoSidebarActions.setSubmitButtonState({
             topScroll: "0",
         }))

         if(filesToUpload[key].progressBar !== 100){

             await new Promise((resolve, reject)=>{

                 try {

                     fileReader.onload = async (event: ProgressEvent<FileReader>) => {

                         const data = event!.target!.result!;

                         const filename = `${file.name}`.split(".");
                         const extension = filename.pop();
                         const editedName = `${
                             filename.join(".")
                         }-${
                             timeStamp
                             .replace(/:/gm, ".")
                             .replace(/,\s/gm,"-")
                         }.${
                             extension
                         }`;

                         for (let currentChunk = 0; currentChunk < +totalChunks + 1; currentChunk++) {

                             const chunk = data.slice(currentChunk * chunkSize, (currentChunk + 1) * chunkSize);

                             const urlParams = {
                                 name: editedName,
                                 type: file.type,
                                 size: file.size,
                                 totalChunks: totalChunks + 1,
                                 currentChunk: currentChunk + 1,
                                 sessionUniqueId: sessionUniqueId,
                                 userSessionInfo: {
                                     amountOfFiles: Object.keys(filesToUpload).length,
                                     currentFileIndex: +key + 1
                                 },
                                 fileList
                             };

                             await axiosApi.uploadChunksOnServer({chunk, urlParams});

                             filesToUploadNewObject[key] = {
                                 file: file,
                                 progressBar: ((currentChunk + 1) / (totalChunks + 1) * 100)
                             };

                             console.log(`${currentChunk + 1} of ${totalChunks + 1}`);

                             if(currentChunk + 1 === totalChunks + 1) {
                                 resolve("");
                             }

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