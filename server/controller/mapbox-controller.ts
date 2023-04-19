import {Request, Response} from "express";
import {mapboxServices} from "../services/mapbox-services";

class MapboxController {

    async getMapboxGeoJsonData(req: Request, res: Response){

        const mapboxJsonData = await mapboxServices.getMapboxGeoJsonData();
        return res.json(mapboxJsonData);

    }

}

const mapboxController = new MapboxController();

export {
    mapboxController
}