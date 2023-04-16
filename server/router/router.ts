import { Router } from "express"
import { awsController } from "../controller/aws-controller";
import { firebaseController } from "../controller/firebase-controller";

const router: Router = Router();

//aws routes
router.get("/get-bucket-list-object", awsController.getBucketListObjects);
router.post("/process-the-file-list-and-save-them-into-bucket", awsController.processFilesListAndSaveThemIntoBucket)
router.post("/upload-files-into-bucket", awsController.uploadFilesIntoBucket);
//firebase routes
router.get("/get-all-firebase-collections", firebaseController.getAllFirebaseCollections)

export {
    router
}