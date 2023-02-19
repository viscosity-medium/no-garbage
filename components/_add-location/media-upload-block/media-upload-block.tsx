import React from 'react';
import VStack from "../../_common/flex-stack/v-stack/v-stack";
import Text from "../../_common/text/text";
import UploadArea from "./upload-area/upload-area";

const MediaUploadBlock = () => {
    return (
        <VStack
            margin={"52px 0 0"}
        >
            <Text
                tag={"span"}
                text={"Upload relevant media"}
                size={"24px"}
            />
            <UploadArea/>
        </VStack>
    );
};

export default MediaUploadBlock;