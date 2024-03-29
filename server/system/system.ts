import path from "path";;

const systemVariables = {

    isDev: process.env.MODE! === "DEVELOPMENT",
    rootDir: process.cwd(),
    mode: process.env.MODE!,
    getConvertedMediaPath: (args: string[]) => path.resolve( process.cwd(), "file-storage", "converted", ...args ),
    getNonConvertedMediaPath: (args: string[]) => path.resolve( process.cwd(), "file-storage", "non-converted", ...args ),
    asyncCleanerTime: process.env.MODE! === "DEVELOPMENT" ? (1000 * 60) * 2 : (1000 * 60) * 10,

    //firebase
        //firebase prod values
    firebaseProdApiKey: process.env.FIREBASE_PROD_API_KEY!,
    firebaseProdProjectId: process.env.FIREBASE_PROD_PROJECT_ID!,
    firebaseProdAppId: process.env.FIREBASE_PROD_APP_ID!,
    firebaseProdMessagingSenderId: process.env.FIREBASE_PROD_MESSAGING_SENDER_ID!,
    firebaseProdMeasurementId: process.env.FIREBASE_PROD_MEASUREMENT_ID!,
        //firebase dev values
    firebaseDevApiKey: process.env.FIREBASE_DEV_API_KEY!,
    firebaseDevProjectId: process.env.FIREBASE_DEV_PROJECT_ID!,
    firebaseDevAppId: process.env.FIREBASE_DEV_APP_ID!,
    firebaseDevMessagingSenderId: process.env.FIREBASE_DEV_MESSAGING_SENDER_ID!,
    firebaseDevMeasurementId: process.env.FIREBASE_DEV_MEASUREMENT_ID!,

    //mapbox
    mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!,

    //aws
    awsAccessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    awsSecretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
    awsS3BucketName: process.env.MODE! === "DEVELOPMENT" ?
        process.env.NEXT_PUBLIC_AWS_S3_DEV_BUCKET_NAME! :
        process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
    awsS3Region: process.env.NEXT_PUBLIC_AWS_S3_REGION!,
    awsApiVersion: process.env.NEXT_PUBLIC_AWS_API_VERSION!,

}

export {
    systemVariables
}