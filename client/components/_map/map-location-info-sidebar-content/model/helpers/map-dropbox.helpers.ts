import colors from "../../../../../styles/globals/colors";

const appendFilesToFormData = ({files, filesInFormData, setFilesInFormData}) => {

    const filesAmount = Object.keys(filesInFormData).length || 0;
    const editedFilesInFormData = {...filesInFormData};
    const existedFileNames = Object.keys(filesInFormData).map(fileNumber => (
        filesInFormData[fileNumber].name
    ));
    let i = 0

    Object.keys(files).forEach(file => {
        if(!existedFileNames.includes(files[i].name)){
            Object.assign(editedFilesInFormData, {[filesAmount + i]: files[i]});
            i++
        }
    });
    setFilesInFormData(editedFilesInFormData);

}

const onClickDropbox = ({e, fileInputRef}) => {
    e.preventDefault();
    fileInputRef?.current?.click();
};
const onInputContentChange = ({e, dropBoxProperties, setDropBoxProperties, filesInFormData, setFilesInFormData}) => {

    const files = e.target.files;

    setDropBoxProperties({
        ...dropBoxProperties,
        title: "Wonderful! You did it!",
        boxShadow: ""
    });
    appendFilesToFormData({files, filesInFormData, setFilesInFormData});

};
const onMouseHoverDropbox = ({e, dropBoxProperties, setDropBoxProperties}) => {
    e.preventDefault();
    setDropBoxProperties({
        ...dropBoxProperties,
        boxShadow: `0px 0px 15px 0px ${colors.mapDragAndDropColor}`
    });
};
const onMouseLeaveDropbox = ({e, dropBoxProperties, setDropBoxProperties}) => {
    e.preventDefault();
    setDropBoxProperties({
        ...dropBoxProperties,
        boxShadow: ""
    });
};
const onDropDropboxFiles = ({e, dropBoxProperties, setDropBoxProperties, filesInFormData, setFilesInFormData}) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setDropBoxProperties({
        ...dropBoxProperties,
        title: "Wonderful! You did it!",
        boxShadow: ""
    })
    appendFilesToFormData({files, filesInFormData, setFilesInFormData})
};
const onDragStart = ({e, dropBoxProperties, setDropBoxProperties}) => {
    e.preventDefault();
    setDropBoxProperties({
        ...dropBoxProperties,
        title: "Great! Drop the files into this area.",
        boxShadow: `0px 0px 15px 0px ${colors.mapDragAndDropColor}`
    })
};
const onDragLeave = ({e, dropBoxProperties, setDropBoxProperties}) => {
    e.preventDefault();
    setDropBoxProperties({
        ...dropBoxProperties,
        title: "Click or drag file to this area to upload",
        boxShadow: ""
    })
};
export {onDragLeave};
export {onDragStart};
export {onDropDropboxFiles};
export {onMouseLeaveDropbox};
export {onMouseHoverDropbox};
export {onInputContentChange};
export {onClickDropbox};