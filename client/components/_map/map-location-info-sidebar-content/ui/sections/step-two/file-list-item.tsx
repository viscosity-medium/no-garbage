import HStack from "../../../../../_common/flex-stack/h-stack/h-stack";
import PaperClipSvg from "public/assets/map/paper-clip.svg";
import Text from "../../../../../_common/text/text";
import Button from "../../../../../_common/button/button";
import BucketSvg from "public/assets/map/bucket.svg";
import colors from "../../../../../../styles/globals/colors";
import {useState} from "react";

import {onClickBucketButton, onHoverBucketButton, onLeaveBucketButton} from "../../../model/on-click-bucket.button";

const FileListItem = ({ fileData, filesInFormData, setFilesInFormData, fileName }) => {

    const [bucketFillColor, setColorFillColor] = useState("rgba(0,0,0,0.45)");

    return (
        <HStack
            justify={"space-between"}
            margin={"5px 0"}
            padding={"0 5px"}
        >
            <HStack
                align={"center"}
            >
                <PaperClipSvg/>
                <Text
                    tag={"span"}
                    margin={"0 0 0 10px"}
                    color={colors.mapDragAndDropColor}
                >
                    {fileData.name}
                </Text>
            </HStack>
            <Button
                width={"auto"}
                height={"auto"}
                onClick={onClickBucketButton({fileName, filesInFormData, setFilesInFormData})}
                onMouseEnter={onHoverBucketButton({setColorFillColor})}
                onMouseLeave={onLeaveBucketButton({setColorFillColor})}
            >
                <BucketSvg
                    fill={bucketFillColor}
                />
            </Button>
        </HStack>
    );
};

export { FileListItem };