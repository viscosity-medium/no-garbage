import {locationInfoSidebarActions} from "../map-location-info-sidebar.slice";

const onClickBucketButton = ({passingProperties}) => () => {

    const {dispatch, fileName, filesToUpload} = passingProperties;
    const editedFileList = {};

    Object.keys(filesToUpload).forEach((fileNumber, index) => {

        if (filesToUpload[fileNumber].file.name !== fileName) {
            editedFileList[index] = filesToUpload[fileNumber];
        }

    });

    dispatch(locationInfoSidebarActions.setFilesToUpload(editedFileList));

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