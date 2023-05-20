import colors from "../../../../../styles/globals/colors";
import {locationInfoSidebarActions} from "../map-location-info-sidebar.slice";
import {batch} from "react-redux";

const appendFilesToFormData = ({
    files,
    passingProperties
}) => {

    const {dispatch, filesToUpload, dropboxProperties} = passingProperties;
    const filesAmount = Object.keys(filesToUpload).length || 0;
    const editedFilesToUpload = {...filesToUpload};
    const existedFileNames = Object.keys(filesToUpload).map(fileNumber => (
        filesToUpload[fileNumber].file.name
    ));
    const dropboxText = ((Object.keys(filesToUpload).length + Object.keys(files).length) > 9 ?
        {
            title: "The limit has been reached",
            description: "You have uploaded 10 files"
        } :
        {
            title: "Wonderful! You did it!",
            description: "You can upload up to 10 files by adding them all together or separately"
        }
    );

    Object.keys(files).forEach((file, index) => {
        if(!existedFileNames.includes(files[index].name) && (filesAmount + index) < 10){

            Object.assign(editedFilesToUpload, {[filesAmount + index]: {
                    file: files[index],
                    progressBar: 0
            }});
        }
    });

    batch(()=>{
        dispatch(locationInfoSidebarActions.setDropboxProperties({
            ...dropboxProperties,
            title: dropboxText.title,
            description: dropboxText.description,
            boxShadow: ""
        }));
        dispatch(locationInfoSidebarActions.setFilesToUpload(editedFilesToUpload));
    })

}

const onClickDropbox = ({e, fileInputRef}) => {
    e.preventDefault();
    fileInputRef?.current?.click();
};
const onInputContentChange = ({e, passingProperties}) => {
    e.preventDefault();
    const files = e.target.files;

    appendFilesToFormData({files, passingProperties});

};
const onMouseHoverDropbox = ({e, passingProperties}) => {
    e.preventDefault();
    const {dropboxProperties, dispatch} = passingProperties;

    dispatch(locationInfoSidebarActions.setDropboxProperties({
        ...dropboxProperties,
        boxShadow: `0px 0px 15px 0px ${colors.mapDragAndDropColor}`
    }));
};

const onMouseLeaveDropbox = ({e, passingProperties}) => {
    e.preventDefault();
    const {dropboxProperties, dispatch} = passingProperties;

    dispatch(locationInfoSidebarActions.setDropboxProperties({
        ...dropboxProperties,
        boxShadow: ""
    }));
};

const onDropDropboxFiles = ({e, passingProperties, }) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    appendFilesToFormData({files, passingProperties});
};
const onDragStart = ({e, passingProperties}) => {

    e.preventDefault();
    const {dropboxProperties, dispatch} = passingProperties;

    dispatch(locationInfoSidebarActions.setDropboxProperties({
        ...dropboxProperties,
        title: "Great! Drop the files into this area.",
        boxShadow: `0px 0px 15px 0px ${colors.mapDragAndDropColor}`
    }));

};
const onDragLeave = ({e, passingProperties}) => {
    e.preventDefault();
    const {dropboxProperties, dispatch} = passingProperties;

    dispatch(locationInfoSidebarActions.setDropboxProperties({
        ...dropboxProperties,
        title: "Click or drag file to this area to upload",
        boxShadow: ""
    }));

};
export {
    onDragLeave,
    onDragStart,
    onDropDropboxFiles,
    onMouseLeaveDropbox,
    onMouseHoverDropbox,
    onInputContentChange,
    onClickDropbox
};