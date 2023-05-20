import {locationInfoSidebarActions} from "../map-location-info-sidebar.slice";

const onClickBucketButton = ({passingProperties}) => () => {

    const {dispatch, fileName, filesToUpload, dropboxProperties} = passingProperties;
    let dropboxNewProperties = {};
    const editedFileList = {};

    Object.keys(filesToUpload).forEach((fileNumber, index) => {

        if (filesToUpload[fileNumber].file.name !== fileName) {
            editedFileList[index] = filesToUpload[fileNumber];
        }

    });

    const filesAmount = Object.keys(editedFileList).length;

    if(filesAmount === 0){
        dropboxNewProperties = {
            title: "Click or drag file to this area to upload",
            description: "You can upload up to 10 files by adding them all together or separately"
        }
    } else {
        dropboxNewProperties = {
            title: "Wonderful! You did it!",
            description: "You can upload up to 10 files by adding them all together or separately"
        }
    };

    dispatch(locationInfoSidebarActions.setFilesToUpload(editedFileList));
    dispatch(locationInfoSidebarActions.setDropboxProperties({
        ...dropboxProperties,
        ...dropboxNewProperties
    }))

};
const onHoverBucketButton = ({setColorFillColor}) => () => {
    setColorFillColor("rgba(255,0,0,0.45)");
};
const onLeaveBucketButton = ({setColorFillColor}) => () => {
    setColorFillColor("rgba(0,0,0,0.45)");
};
export {onLeaveBucketButton};
export {onHoverBucketButton};
export {onClickBucketButton};