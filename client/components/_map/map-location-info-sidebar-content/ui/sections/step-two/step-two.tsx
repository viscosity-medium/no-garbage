import React, {useState} from 'react';
import {DragAndDropArea} from "./drag-and-drop-area";
import UnorderedList from "../../../../../_common/unordered-list/unordered-list";
import {FileListItem} from "./file-list-item";
import VStack from "../../../../../_common/flex-stack/v-stack/v-stack";
import {useSelector} from "react-redux";
import {getFilesInFormData} from "../../../model/map-location-info-sidebar.selectors";
import {mapCreateSidebarFileList} from "../../../model/helpers/map-create-sidebar-file-list";

const StepTwo = () => {

    const filesInFormData = useSelector(getFilesInFormData);

    return (
        <>
            <VStack
                zIndex={2}
                width={"395px"}
                height={"auto"}
                position={"relative"}
            >
                <DragAndDropArea/>
                <UnorderedList
                    margin={"10px 0 0"}
                >
                    {
                        mapCreateSidebarFileList({filesInFormData})
                    }
                </UnorderedList>
            </VStack>
        </>
    );
};

export {StepTwo};