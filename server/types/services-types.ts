export interface PhotoFileList {
    url: string
    previewImageUrl: string
}

export interface AWSServicesProps {
    prefix?: string
    fileList?: Array<PhotoFileList[]>
}

export interface AWSBucketListItem {
    Key: string,
    ETag: string
    StorageClass: string
    Size: number
    LastModified: Date
}