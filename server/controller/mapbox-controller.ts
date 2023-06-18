import {Request, Response} from "express";
import {mapboxServices} from "../services/mapbox-services";
import {firebaseServices} from "../services/firebase-services";

class MapboxController {

    async getMapboxGeoJsonData(req: Request, res: Response){

        const mapboxJsonData = await (
            async () => {
                const features = await firebaseServices.getAllFirebaseDocuments({
                    documentRefProp: "geoJsonFeaturesRef"
                });

                return ({
                    type: "FeatureCollection",
                    features
                })

                // return mapboxServices.getMapboxGeoJsonData()
            }
        )();

        return res.json(mapboxJsonData);

    }

}

const mapboxController = new MapboxController();

export {
    mapboxController
}