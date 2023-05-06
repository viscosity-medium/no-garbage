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
    onDropDropboxFiles, onInputContentChange, onMouseHoverDropbox,
    onMouseLeaveDropbox
} from "../../../model/helpers/map-dropbox.helpers";

const DragAndDropArea = ({
    dropBoxProperties,
    setDropBoxProperties,
    filesInFormData,
    setFilesInFormData
}) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <Div
                position={"absolute"}
                width={"395px"}
                height={"172px"}
                border={`1px solid ${colors.tableCellDark}`}
                borderRadius={"5px"}
                boxShadow={dropBoxProperties.boxShadow}
                transition={"0.3s"}
                zIndex={2}
                cursor={"pointer"}
                onClick={(e) => onClickDropbox({e, fileInputRef})}
                onDrop={(e) => onDropDropboxFiles({e, dropBoxProperties, setDropBoxProperties, filesInFormData, setFilesInFormData})}
                onMouseEnter={(e) => onMouseHoverDropbox({e, dropBoxProperties, setDropBoxProperties})}
                onMouseLeave={(e) => onMouseLeaveDropbox({e, dropBoxProperties, setDropBoxProperties})}
                onDragStart={(e) => onDragStart({e, dropBoxProperties, setDropBoxProperties})}
                onDragLeave={(e) => onDragLeave({e, dropBoxProperties, setDropBoxProperties})}
                onDragOver={(e) => onDragStart({e, dropBoxProperties, setDropBoxProperties})}
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
                        {dropBoxProperties.title}
                    </Text>
                    <Text
                        tag={"span"}
                        size={"14px"}
                        textAlign={"center"}
                        margin={"5px 0 0"}
                    >
                        {dropBoxProperties.description}
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
                    dropBoxProperties,
                    setDropBoxProperties,
                    filesInFormData,
                    setFilesInFormData
                })}
            />
        </>
    );
};

export { DragAndDropArea};