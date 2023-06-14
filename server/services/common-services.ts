import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import {systemVariables} from "../system/system";

interface ConvertVideoProps {
    fileName: string
    inputPath: string
    outputPath: string
}

class CommonServices {

    async uploadFilesOnServer(){

    }

    async convertVideo({
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

    async getFrameFromVideo({
        inputPath,
        fileName
    }){
        await new Promise(async (resolve)=>{
            await ffmpeg({
                source: inputPath
            })
            .takeScreenshots({
                filename: fileName,
                timemarks: [2]
            }, systemVariables.getConvertedMediaPath([]))
            .on("end", () => {
                resolve("")
            })

        })

    }

}

const commonServices = new CommonServices();

export {
    commonServices
}