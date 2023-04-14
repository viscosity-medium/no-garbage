import dotenv from 'dotenv';
dotenv.config();
import bodyParser from "body-parser"
import express from "express"
import cors from "cors";
import http from "http";
import { router } from "./router/router";

const expressApp = express();
const HTTP_PORT = 4142;

expressApp.use(bodyParser.json());
expressApp.use(cors({
    origin: "*",
    credentials: true,
}));
expressApp.use("/server-api", router);

try {

    const httpServer = http.createServer(expressApp);

    httpServer.listen(HTTP_PORT, () => {
        console.log(`Http server is started on port: ${ HTTP_PORT }`)
    })

} catch (error){

}



