import React, {useState} from 'react';
import {DragAndDropArea} from "./drag-and-drop-area";
import UnorderedList from "../../../../../_common/unordered-list/unordered-list";
import {FileListItem} from "./file-list-item";
import VStack from "../../../../../_common/flex-stack/v-stack/v-stack";

const StepTwo = () => {

    const [filesInFormData, setFilesInFormData] = useState({});
    const [dropBoxProperties, setDropBoxProperties] = useState({
        title: "Click or drag file to this area to upload",
        description: "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files",
        boxShadow: ""
    });

    return (
        <>
            <VStack
                zIndex={2}
                width={"395px"}
                height={"auto"}
                position={"relative"}
            >
                <DragAndDropArea
                    dropBoxProperties={dropBoxProperties}
                    setDropBoxProperties={setDropBoxProperties}
                    filesInFormData={filesInFormData}
                    setFilesInFormData={setFilesInFormData}
                />
                <UnorderedList
                    margin={"10px 0 0"}
                >
                    {
                        Object.keys(filesInFormData).map((file, index) => {

                            const fileData = filesInFormData[file];
                            const keyAttribute = `file-data-key-${index}-${fileData.name}`;

                            return(
                                <FileListItem
                                    key={keyAttribute}
                                    fileData={fileData}
                                    filesInFormData={filesInFormData}
                                    setFilesInFormData={setFilesInFormData}
                                    fileName={fileData.name}
                                />
                            )

                        })
                    }
                </UnorderedList>
            </VStack>
        </>
    );
};

export {StepTwo};