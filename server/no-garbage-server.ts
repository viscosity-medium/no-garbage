import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser"
import express from "express"
import cors from "cors";
import http from "http";
import { router } from "./router/router";
import multer from "multer";
import {systemVariables} from "./system/system";

const expressApp = express();
const forms = multer();
const HTTP_PORT = 4142;

expressApp.use(bodyParser.json());
// expressApp.use(bodyParser.raw({type: 'application/octet-stream', limit: "100mb"}));
expressApp.use(cors({
    origin: "*",
    credentials: true,
}));
expressApp.use("/server-api", router);

try {

    const httpServer = http.createServer(expressApp);

    httpServer.listen(HTTP_PORT, () => {
        console.log(`Http server is started on port: ${ HTTP_PORT }`);
    });

} catch (error){

}



