import { Router } from "express"
import { awsController } from "../controller/aws-controller";
import { firebaseController } from "../controller/firebase-controller";
import {mapboxController} from "../controller/mapbox-controller";

const router: Router = Router();

//aws routes
router.get("/get-bucket-list-object", awsController.getBucketListObjects);
router.post("/process-the-file-list-and-save-them-into-bucket", awsController.processFilesListAndSaveThemIntoBucket)
router.post("/upload-files-into-bucket", awsController.uploadFilesIntoBucket);
//firebase routes
router.get("/get-all-firebase-collections", firebaseController.getAllFirebaseCollections);
router.get("/rewrite-firebase-collections-photo-path", firebaseController.rewriteFirebaseCollectionsPhotoPath)
//mapbox
router.get("/get-mapbox-geo-json", mapboxController.getMapboxGeoJsonData)


export {
    router
}