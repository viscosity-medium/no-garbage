const systemVariables = {

    //firebase prod values
    firebaseProdApiKey: process.env.NEXT_PUBLIC_FIREBASE_PROD_API_KEY!,
    firebaseProdProjectId: process.env.NEXT_PUBLIC_FIREBASE_PROD_PROJECT_ID!,
    firebaseProdAppId: process.env.NEXT_PUBLIC_FIREBASE_PROD_APP_ID!,
    firebaseProdMessagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_PROD_MESSAGING_SENDER_ID!,
    firebaseProdMeasurementId: process.env.NEXT_PUBLIC_FIREBASE_PROD_MEASUREMENT_ID!,
    //firebase dev values
    firebaseDevApiKey: process.env.NEXT_PUBLIC_FIREBASE_DEV_API_KEY!,
    firebaseDevProjectId: process.env.NEXT_PUBLIC_FIREBASE_DEV_PROJECT_ID!,
    firebaseDevAppId: process.env.NEXT_PUBLIC_FIREBASE_DEV_APP_ID!,
    firebaseDevMessagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_DEV_MESSAGING_SENDER_ID!,
    firebaseDevMeasurementId: process.env.NEXT_PUBLIC_FIREBASE_DEV_MEASUREMENT_ID!,

    //mapbox
    mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!,

    //aws
    awsAccessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    awsSecretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
    awsS3BucketName: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
    awsS3DevBucketName: process.env.NEXT_PUBLIC_AWS_S3_DEV_BUCKET_NAME!,
    awsS3BucketNamesArr: [
        process.env.NEXT_PUBLIC_AWS_S3_DEV_BUCKET_NAME!,
        process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!
    ],
    awsS3Region: process.env.NEXT_PUBLIC_AWS_S3_REGION!,
    awsApiVersion: process.env.NEXT_PUBLIC_AWS_API_VERSION!,

}

export {
    systemVariables
}