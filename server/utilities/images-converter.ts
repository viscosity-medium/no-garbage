import path from "path";
import fs from "fs";
import {systemVariables} from "../system/system";
import sharp from "sharp";
import imageSize from "image-size";

const {rootDir} = systemVariables;

class ImagesConverter{

    async resizeImage({fileName}){

        let width, height;
        const filePath = path.resolve(rootDir, "temp", fileName);

        await imageSize( filePath, function (err, dimensions) {
            width = dimensions?.width;
            height = dimensions?.height
        });

        const smallestDimension = width < height ? {width: 2160} : {height: 2160};

        try
        {
            const newImageInstance = await sharp(filePath)
            .resize(smallestDimension)
            .toBuffer();

            await sharp(newImageInstance).toFile(filePath);

        } catch (err){
            console.log(err);
        }


    }

}

const imageConverter = new ImagesConverter();

export {
    imageConverter
}