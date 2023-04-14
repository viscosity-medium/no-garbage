import { Router } from "express"
import { awsController } from "../controller/controller";

const router: Router = Router();

router.get("/get-bucket-list-object", awsController.getBucketListObjects);
router.post("/process-the-file-list-and-save-them-into-bucket", awsController.processFilesListAndSaveThemIntoBucket)
router.post("/upload-files-into-bucket", awsController.uploadFilesIntoBucket);

export {
    router
}