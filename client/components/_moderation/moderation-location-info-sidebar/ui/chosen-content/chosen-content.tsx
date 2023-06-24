import React from 'react';
import colors from "../../../../../styles/globals/colors";
import {CustomImage} from "../../../../_common/custom-image";
import {Video} from "../../../../_common/video";

const ChosenContent = ({chosenMedia}) => {

    const type = chosenMedia?.url?.split(".")?.pop(-1) === "mp4" ? "video" : "image"
    const loadingGif = "/assets/common/loading-gif.gif";

    return (
        <>
            {
                (type === "video" ?
                    <Video
                        media={chosenMedia?.url}
                        borderRadius={"8px"}
                        width={"400px"}
                        height={"auto"}
                    />
                    :
                    <CustomImage
                        key = {chosenMedia?.id || ""}
                        position={"relative"}
                        width={"400px"}
                        height={"300px"}
                        zIndex={2}
                        zIndexBefore={0}
                        borderRadius={"8px"}
                        backgroundImage={chosenMedia?.preview_image_url}
                        beforeContent={true}
                        before={loadingGif}
                        backgroundColor={colors.middleGrey}
                    />
                )
            }
        </>
    );
};

export {ChosenContent};