import express from "express";
import cors from "cors";
import * as http from "http";
import { router } from "./router/router";

const expressApp = express();
const HTTP_PORT = 4142;


expressApp.use(cors);
expressApp.use("/server-api", router);


try {

    const httpServer = http.createServer(express);

    httpServer.listen(HTTP_PORT, () => {
        console.log(`Http server is started on port: ${HTTP_PORT}`)
    })

} catch (error){

}



