import {FileListItem} from "../../ui/sections/step-two/file-list-item";
import React from "react";

const mapCreateSidebarFileList = ({filesToUpload}) => (
    Object.keys(filesToUpload).map((file, index) => {

        const fileObject = filesToUpload[file];
        const keyAttribute = `file-data-key-${index}-${fileObject.name}`;

        return(
            <FileListItem
                key={keyAttribute}
                fileObject={fileObject}
            />
        )
    })
)

export {
    mapCreateSidebarFileList
}