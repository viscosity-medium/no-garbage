import sharp from "sharp";
import imageSize from "image-size";

interface ResizeImageProps {
    input: string
    output: string
    dimension: 2160 | 512
}

class ImagesConverter{

    async resizeImage({
        input,
        output,
        dimension
    }){

        let width, height;

        await imageSize( input, function (err, dimensions) {
            width = dimensions?.width;
            height = dimensions?.height
        });


        const smallestDimension = width < height ? {width: dimension} : {height: dimension};

        try {

            const newImageInstance = await sharp(input)
            .resize(smallestDimension)
            .toBuffer();

            await sharp(newImageInstance).toFile(output);

        } catch (err){
            console.log(err);
        }


    }

}

const imageConverter = new ImagesConverter();

export {
    imageConverter
}