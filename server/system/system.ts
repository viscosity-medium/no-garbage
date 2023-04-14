const systemVariables = {
    rootDir: process.cwd(),

    //firebase
    firebaseApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,

    //mapbox
    mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!,

    //aws
    awsAccessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    awsSecretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
    awsS3BucketName: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME!,
    awsS3Region: process.env.NEXT_PUBLIC_AWS_S3_REGION!,
    awsApiVersion: process.env.NEXT_PUBLIC_AWS_API_VERSION!,

}

export {
    systemVariables
}