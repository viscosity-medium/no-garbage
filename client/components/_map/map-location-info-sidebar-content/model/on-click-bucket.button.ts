const onClickBucketButton = ({fileName, filesInFormData, setFilesInFormData}) => () => {

    const editedFileList = {}
    let i = 0

    Object.keys(filesInFormData).forEach((fileNumber) => {

        if (filesInFormData[fileNumber].name !== fileName) {
            editedFileList[i] = filesInFormData[fileNumber];
            i++;
        }

    });

    setFilesInFormData(editedFileList);

};
const onHoverBucketButton = ({setColorFillColor}) => () => {
    setColorFillColor("rgba(255,0,0,0.45)");
};
const onLeaveBucketButton = ({setColorFillColor}) => () => {
    setColorFillColor("rgba(0,0,0,0.45)");
};
export {
    onLeaveBucketButton,
    onHoverBucketButton,
    onClickBucketButton
};