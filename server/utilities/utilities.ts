import fs from "fs";
import axios from "axios"
import path from "path"
import {systemVariables} from "../system/system";
import {commonServices} from "../services/common-services";
import {imageConverter} from "./images-converter";

const {rootDir, getConvertedMediaPath} = systemVariables;

class Utilities{

    async downloadFile({url, fileName}) {
        console.log(url)
        const filepath = path.resolve(rootDir, "temp", fileName);
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });

        await new Promise((resolve, reject) => {
            response.data.pipe(fs.createWriteStream(filepath))
            .on('error', reject)
            .on('close', () => resolve(filepath));
        });
        
    }

    async checkFileExistence(args){
        const filepath = path.resolve(rootDir, ...args);
        return await fs.existsSync(filepath);
    };

    async checkFileExistenceFullPath(filepath){
        return await fs.existsSync(filepath);
    };

    async appendFileSync ({filePath, chunk}){
        await fs.appendFileSync(filePath, chunk);
    };

    async deleteFile({filePath}){
        await fs.unlinkSync(filePath);
    };

    async deleteFileList(fileList){

        for await (const singleFile of fileList){
            await new Promise( async (resolve)=>{
                await fs.unlinkSync(singleFile)
                resolve("")
            })
        }

    };

    async asyncCleanMediaFolders({fileList}){

        const {
            getNonConvertedMediaPath,
            getConvertedMediaPath,
            asyncCleanerTime
        } = systemVariables;


        setTimeout(()=>{
            // CHANGE FOR "FOR ... OF ..."
            fileList.map(async singleFile => {

                const fileNameWithoutExtension = singleFile.id;
                const extension = singleFile.extension;
                const nonConvertedFilePath = getNonConvertedMediaPath([`${fileNameWithoutExtension}.${extension}`]);
                let convertedFilePath, fileName, convertedPreviewFilePath, previewFileName;

                // for images
                if(singleFile.mimeType.match("video")){

                    fileName = `${fileNameWithoutExtension}.${extension}`;
                    convertedFilePath = getConvertedMediaPath([fileName]);
                    convertedFilePath = getConvertedMediaPath([fileName]);
                    previewFileName = `${fileNameWithoutExtension}.thumb.jpg`;
                    convertedPreviewFilePath = getConvertedMediaPath([previewFileName]);

                    // for images
                } else if (singleFile.mimeType.match("image")){

                    fileName = `${fileNameWithoutExtension}.jpg`;
                    convertedFilePath = getConvertedMediaPath([fileName]);
                    previewFileName = `${fileNameWithoutExtension}.thumb.jpg`;
                    convertedPreviewFilePath = getConvertedMediaPath([previewFileName]);

                }

                const nonConvertedFileExists = await utilities.checkFileExistenceFullPath(nonConvertedFilePath);
                const convertedFileExists = await utilities.checkFileExistenceFullPath(convertedFilePath);
                const convertedPreviewFileExists = await utilities.checkFileExistenceFullPath(convertedPreviewFilePath);

                const deleteFiles = async ([condition, filePath]) => {
                    if(condition){
                        await utilities.deleteFile({filePath});
                    }
                };

                await deleteFiles([nonConvertedFileExists, nonConvertedFilePath]);
                await deleteFiles([convertedFileExists, convertedFilePath]);
                await deleteFiles([convertedPreviewFileExists, convertedPreviewFilePath])

            });

        }, asyncCleanerTime);
    };

    async convertAndCompressMediaFiles({currentFile}){

        const {getNonConvertedMediaPath} = systemVariables;

        const nonConvertedFilePath = getNonConvertedMediaPath([`${currentFile.id}.${currentFile.extension}`]);
        const fileNameWithoutExtension = currentFile.id;
        const extension = currentFile.extension;
        let convertedFilePath, convertedPreviewFilePath, fileName, previewFileName;

        // for video
        if(currentFile.mimeType.match("video")){

            fileName = `${fileNameWithoutExtension}.${extension}`;
            previewFileName = `${fileNameWithoutExtension}.thumb.jpg`;
            convertedFilePath = getConvertedMediaPath([fileName]);
            convertedPreviewFilePath = getConvertedMediaPath([previewFileName]);

            await commonServices.convertVideo({
                inputPath: nonConvertedFilePath,
                outputPath: convertedFilePath,
            });

            await commonServices.getFrameFromVideo({
                inputPath: nonConvertedFilePath,
                fileName: previewFileName
            });

            // for images
        } else if (currentFile.mimeType.match("image")){

            fileName = `${fileNameWithoutExtension}.jpg`;
            previewFileName = `${fileNameWithoutExtension}.thumb.jpg`;
            convertedFilePath = getConvertedMediaPath([fileName]);
            convertedPreviewFilePath = getConvertedMediaPath([previewFileName]);

            await imageConverter.resizeImage({
                input: nonConvertedFilePath,
                output: convertedFilePath,
                dimension: 2160
            });

            await imageConverter.resizeImage({
                input: nonConvertedFilePath,
                output: convertedPreviewFilePath,
                dimension: 512
            });

        }

        return {
            nonConvertedFilePath,
            convertedFilePath,
            convertedPreviewFilePath,
            fileName,
            previewFileName
        }
    }

}

const utilities = new Utilities();

export {
    utilities
};