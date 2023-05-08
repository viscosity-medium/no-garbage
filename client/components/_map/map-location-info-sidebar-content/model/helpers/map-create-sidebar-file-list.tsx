import {FileListItem} from "../../ui/sections/step-two/file-list-item";
import React from "react";

const mapCreateSidebarFileList = ({filesToUpload}) => (
    Object.keys(filesToUpload).map((file, index) => {

        const fileData = filesToUpload[file];
        const keyAttribute = `file-data-key-${index}-${fileData.name}`;

        return(
            <FileListItem
                key={keyAttribute}
                fileData={fileData}
                fileName={fileData.name}
            />
        )
    })
)

export {
    mapCreateSidebarFileList
}