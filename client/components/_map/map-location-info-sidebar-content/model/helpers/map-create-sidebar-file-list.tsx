import {FileListItem} from "../../ui/sections/step-two/file-list-item";
import React from "react";

const mapCreateSidebarFileList = ({filesInFormData}) => {
    return Object.keys(filesInFormData).map((file, index) => {

        const fileData = filesInFormData[file];
        const keyAttribute = `file-data-key-${index}-${fileData.name}`;

        return(
            <FileListItem
                key={keyAttribute}
                fileData={fileData}
                fileName={fileData.name}
            />
        )
    })
}

export {
    mapCreateSidebarFileList
}