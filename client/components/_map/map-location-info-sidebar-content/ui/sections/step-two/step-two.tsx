import React from 'react';
import {DragAndDropArea} from "./drag-and-drop-area";
import {UnorderedList} from "../../../../../_common/unordered-list";
import {VStack} from "../../../../../_common/flex-stack";
import {useSelector} from "react-redux";
import {getFilesToUpload} from "../../../model/map-location-info-sidebar.selectors";
import {mapCreateSidebarFileList} from "../../../model/helpers/map-create-sidebar-file-list";

const StepTwo = () => {

    const filesToUpload = useSelector(getFilesToUpload);

    return (
        <>
            <VStack
                zIndex={2}
                width={"395px"}
                height={"auto"}
                position={"relative"}
            >
                <DragAndDropArea/>
            </VStack>
            <VStack
                zIndex={2}
                width={"395px"}
                height={"auto"}
                position={"relative"}
                margin={"15px 0 0"}
            >
                <UnorderedList
                    margin={"10px 0 0"}
                >
                    {
                        mapCreateSidebarFileList({filesToUpload})
                    }
                </UnorderedList>
            </VStack>
        </>
    );

};

export { StepTwo };