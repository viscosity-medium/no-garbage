import React, {useEffect} from 'react';
import {SourceStyled, VideoStyled} from "./video.styled";
import {VStack} from "../../../flex-stack";
import colors from "../../../../../styles/globals/colors";

const Video = ({media, width, height, borderRadius}) => {

    useEffect(()=>{
        console.log(media)
    },[media])

    return (
        <VStack
            width={width}
            height={height}
            padding={"10px"}
            align={"center"}
            justify={"center"}
            borderRadius={borderRadius}
            background={colors.middleGrey}
        >
            <VideoStyled
                key={media}
                controls
                autoPlay
                width={"100%"}
                height={"auto"}
                borderRadius={borderRadius}
            >
                <SourceStyled
                    src={media}
                    type={"video/mp4"}
                />
            </VideoStyled>
        </VStack>
    );
};

export {Video};