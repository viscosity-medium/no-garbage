import {Request, Response} from "express";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

interface ConvertVideoProps {
    fileName: string
    inputPath: string
    outputPath: string
}

class CommonServices {

    async uploadFilesOnServer(){

    }

    async convertVideo({
        fileName,
        inputPath,
        outputPath
    }){

        ffmpeg.setFfmpegPath(ffmpegInstaller.path);

        await new Promise ((resolve) => {
            ffmpeg(inputPath)
            .videoCodec('libx264')
            .videoBitrate('4000')
            .fps(25)
            .on('end', function() {
                resolve("");
            })
            .save(outputPath);
        })

    }

}

const commonServices = new CommonServices();

export {
    commonServices
}