import React, {FC, useState} from 'react';
import cls from "./custom-image.module.scss"
import Image, {StaticImageData} from "next/image";
import {Div} from "./custom-div.styled";

interface ICustomImageProps {
    position: string
    afterContent?: boolean
    backgroundImage?: string | StaticImageData
    backgroundColor?: string
    after?: string
    hover?: string
    width: string
    height: string
    zIndex: number
    zIndexAfter?: number | string
    border?: string
    borderRadius?: string
    scale?: boolean
    margin?: string
    cursor?: string
    overflow?: string
    imageScale?: string
    imageTransition?: string
    imageRotate?: string
    top?: string
    right?: string
    bottom?: string
    left?: string
    objectFit?: string
    clickHandler?: () => void
}

const CustomImage: FC<ICustomImageProps> = ({
    position,
    backgroundImage,
    backgroundColor,
    after,
    hover,
    width,
    height,
    zIndex,
    afterContent,
    zIndexAfter= 2,
    border,
    borderRadius,
    scale,
    margin,
    cursor,
    overflow="hidden",
    imageScale,
    imageTransition,
    imageRotate,
    top,
    right,
    bottom,
    left,
    clickHandler,
    objectFit,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Div
            afterContent={afterContent}
            position={position}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            after={after}
            width={width}
            height={height}
            zIndex={zIndex}
            zIndexAfter={zIndexAfter}
            hover={hover}
            scale={scale}
            margin={margin}
            cursor={cursor}
            overflow={overflow}
            onClick={clickHandler}
            border={border}
            borderRadius={borderRadius}
            background={backgroundColor}
        >
            <Image
                className={imageScale && isHovered ? cls["is-hovered"] : ""}
                onMouseEnter={() => {setIsHovered(true)}
            }
                onMouseLeave={() => {setIsHovered(false)}}
                src={backgroundImage || ""}
                alt={"promo-section-custom-image.png"}
                fill
                style={{
                    zIndex: 1,
                    position: "absolute",
                    objectFit: "cover",
                    transition: imageTransition,
                    rotate: imageRotate,
                    userSelect: "none"
                }}
            />
        </Div>
    );
};

export default CustomImage;