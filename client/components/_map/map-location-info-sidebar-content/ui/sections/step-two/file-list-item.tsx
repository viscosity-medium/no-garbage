import HStack from "../../../../../_common/flex-stack/h-stack/h-stack";
import PaperClipSvg from "public/assets/map/paper-clip.svg";
import Text from "../../../../../_common/text/text";
import Button from "../../../../../_common/button/button";
import BucketSvg from "public/assets/map/bucket.svg";
import colors from "../../../../../../styles/globals/colors";
import {FC, useState} from "react";
import {
    onClickBucketButton,
    onHoverBucketButton,
    onLeaveBucketButton
} from "../../../model/helpers/map-bucket-button.helpers";
import {useAppDispatch} from "../../../../../../store/store";
import {useSelector} from "react-redux";
import {getDropboxProperties, getFilesToUpload} from "../../../model/map-location-info-sidebar.selectors";
import {ProgressBar} from "../../../../../_common/progress-bar/progress-bar";
import VStack from "../../../../../_common/flex-stack/v-stack/v-stack";

interface FileListItemProps {
    fileObject
}

const FileListItem: FC<FileListItemProps> = ({ fileObject }) => {

    const dispatch = useAppDispatch();
    const filesToUpload = useSelector(getFilesToUpload);
    const dropboxProperties = useSelector(getDropboxProperties);
    const passingProperties = {
        dispatch,
        filesToUpload,
        fileName: fileObject.file.name,
        dropboxProperties
    }
    const [bucketFillColor, setColorFillColor] = useState("rgba(0,0,0,0.45)");

    return (
        <VStack>
            <HStack
                justify={"space-between"}
                margin={"5px 0"}
                padding={"0 5px"}
            >
                <HStack
                    align={"center"}
                    height={"20px"}
                    transition={"0.3s"}
                >
                    <PaperClipSvg/>
                    <Text
                        tag={"span"}
                        width={"350px"}
                        margin={"0 0 0 10px"}
                        color={colors.mapDragAndDropColor}
                        overflow={"hidden"}
                        whiteSpace={"nowrap"}
                        textOverflow={"ellipsis"}
                    >
                        {fileObject.file.name}
                    </Text>

                </HStack>
                {
                    fileObject.progressBar !== 100 ?
                        <Button
                            width={"auto"}
                            height={"auto"}
                            onClick={onClickBucketButton({passingProperties})}
                            onMouseEnter={onHoverBucketButton({setColorFillColor})}
                            onMouseLeave={onLeaveBucketButton({setColorFillColor})}
                            border={"unset"}
                            lineHeight={1}
                        >
                            <BucketSvg
                                fill={bucketFillColor}
                            />
                        </Button> :
                        <></>
                }
            </HStack>
            <ProgressBar
                progressBar={fileObject.progressBar}
            />
        </VStack>
    );
};

export { FileListItem };