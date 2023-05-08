import fs from "fs";
import axios from "axios"
import path from "path"
import {systemVariables} from "../system/system";

const {rootDir} = systemVariables;

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

    async checkFileExistence({fileName}){
        const filepath = path.resolve(rootDir, "temp", fileName);
        return await fs.existsSync(filepath)
    }

}

const utilities = new Utilities();

export {
    utilities
}