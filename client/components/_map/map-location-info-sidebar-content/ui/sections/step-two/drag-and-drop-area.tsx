import {Div} from "../../../../../_common/custom-image/custom-div.styled";
import DropBoxImage from "public/assets/common/dropbox.svg"
import VStack from "../../../../../_common/flex-stack/v-stack/v-stack";
import Text from "../../../../../_common/text/text";
import CustomInput from "../../../../../_common/custom-input/custom-input";
import {useRef} from "react";
import colors from "../../../../../../styles/globals/colors";

import {
    onClickDropbox,
    onDragLeave,
    onDragStart,
    onDropDropboxFiles,
    onInputContentChange,
    onMouseHoverDropbox,
    onMouseLeaveDropbox
} from "../../../model/helpers/map-dropbox.helpers";
import {useSelector} from "react-redux";
import {getDropboxProperties, getFilesToUpload} from "../../../model/map-location-info-sidebar.selectors";
import {useAppDispatch} from "../../../../../../store/store";

const DragAndDropArea = () => {

    const dispatch = useAppDispatch();
    const filesToUpload = useSelector(getFilesToUpload);
    const dropboxProperties = useSelector(getDropboxProperties);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const passingProperties = {
        dispatch,
        filesToUpload,
        dropboxProperties
    };

    return (
        <>
            <Div
                position={"absolute"}
                width={"395px"}
                height={"172px"}
                border={`1px solid ${colors.tableCellDark}`}
                borderRadius={"5px"}
                boxShadow={dropboxProperties.boxShadow}
                transition={"0.3s"}
                zIndex={2}
                cursor={"pointer"}
                onClick={(e) => onClickDropbox({e, fileInputRef})}
                onDrop={(e) => onDropDropboxFiles({e, passingProperties})}
                onMouseEnter={(e) => onMouseHoverDropbox({e, passingProperties})}
                onMouseLeave={(e) => onMouseLeaveDropbox({e, passingProperties})}
                onDragStart={(e) => onDragStart({e, passingProperties})}
                onDragLeave={(e) => onDragLeave({e, passingProperties})}
                onDragOver={(e) => onDragStart({e, passingProperties})}
            />
            <VStack
                width={"395px"}
                height={"172px"}
                position={"relative"}
                justify={"center"}
                align={"center"}
                padding={"25px auto 16px"}
                zIndex={-2}
            >
                <DropBoxImage/>
                <VStack
                    margin={"20px 15px 0"}
                    position={"relative"}
                    justify={"center"}
                >
                    <Text
                        tag={"h3"}
                        size={"16px"}
                        textAlign={"center"}
                    >
                        {dropboxProperties.title}
                    </Text>
                    <Text
                        tag={"span"}
                        size={"14px"}
                        textAlign={"center"}
                        margin={"5px 0 0"}
                    >
                        {dropboxProperties.description}
                    </Text>
                    <Text
                        tag={"span"}
                        size={"10px"}
                        textAlign={"center"}
                        margin={"5px 0 0"}
                    >
                        {dropboxProperties.subDescription}
                    </Text>
                </VStack>
            </VStack>
            <CustomInput
                display={"none"}
                type={"file"}
                ref={fileInputRef}
                multiple={true}
                onChange={(e) => onInputContentChange({
                    e,
                    passingProperties
                })}
                accept={"image/*, video/*"}
            />
        </>
    );
};

export { DragAndDropArea};