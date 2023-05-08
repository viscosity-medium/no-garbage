import {axiosApi} from "../../../../../utilities/axios-api";

interface FetchFilesByChunksProps {
    [p: string]: File
}

const fetchFilesByChunks = async ({files}: FetchFilesByChunksProps) => {

     for await (const key of Object.keys(files)){

         const file = files[key];
         const fileReader = new FileReader();
         const chunkSize = 5 * 1024 * 1024;
         const totalChunks = Math.ceil(file.size / chunkSize) - 1;

         await fileReader.readAsArrayBuffer(file);

         fileReader.onload = async (event: ProgressEvent<FileReader>) => {

             const data = event!.target!.result!;
             const filename = `${file.name}`.split(".");
             const extension = filename.pop();
             const chunkArr = [];

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
                 chunkArr.push(chunk);

             }

             let chunkIndex = 1
             for await (const currentChunk of chunkArr){
                 const urlParams = {
                     name: editedName,
                     type: file.type,
                     size: file.size,
                     totalChunks,
                     currentChunk
                 };

                 await axiosApi.uploadChunksOnServer({chunk: currentChunk, urlParams});
                 console.log(`${chunkIndex} of ${totalChunks + 1}`);
                 chunkIndex++;
             }
         }

    }

     console.log("uploading completed")

}

export {
    fetchFilesByChunks
}