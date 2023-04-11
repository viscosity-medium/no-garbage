import { Router } from "express"
import {awsController} from "../controller/controller";

const router: Router = Router();

router.get("/get-bucket-list-object", awsController.getBucketListObjects);
//router.post("");

export {
    router
}