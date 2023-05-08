import multer from "multer";

const multerStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './file-storage')
    },
    filename: (req, file, callback) => {
        console.log(file)
        callback(null, `${file.originalname.replace(/\./,`${Date.now()}.`)}`)
    }
});

const multipartParser = multer({
    storage: multerStorage
});

const multipleFilesMultiParser = multipartParser.fields([{ name: 'files'}]);

export {multipleFilesMultiParser}