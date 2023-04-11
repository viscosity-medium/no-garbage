import { Request, Response } from 'express';

class AwsController {

    async getBucketListObjects (req: Request){
        console.log(req.query)
    }

}

const awsController = new AwsController();

export {awsController}