import colors from "../../../../../styles/globals/colors";
import {locationInfoSidebarActions} from "../map-location-info-sidebar.slice";

const appendFilesToFormData = ({files, passingProperties}) => {

    const {dispatch, filesToUpload} = passingProperties

    const filesAmount = Object.keys(filesToUpload).length || 0;
    const editedfilesToUpload = {...filesToUpload};
    const existedFileNames = Object.keys(filesToUpload).map(fileNumber => (
        filesToUpload[fileNumber].name
    ));
    let i = 0

    Object.keys(files).forEach(file => {
        if(!existedFileNames.includes(files[i].name)){
            Object.assign(editedfilesToUpload, {[filesAmount + i]: files[i]});
            i++
        }
    });

    dispatch(locationInfoSidebarActions.setFilesToUpload(editedfilesToUpload));

}

const onClickDropbox = ({e, fileInputRef}) => {
    e.preventDefault();
    fileInputRef?.current?.click();
};
const onInputContentChange = ({e, passingProperties}) => {

    const files = e.target.files;
    const {dropboxProperties, dispatch} = passingProperties;

    dispatch(locationInfoSidebarActions.setDropboxProperties({
        ...dropboxProperties,
        title: "Wonderful! You did it!",
        boxShadow: ""
    }))
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
    const {dropboxProperties, dispatch} = passingProperties;

    dispatch(locationInfoSidebarActions.setDropboxProperties({
        ...dropboxProperties,
        title: "Wonderful! You did it!",
        boxShadow: ""
    }));

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