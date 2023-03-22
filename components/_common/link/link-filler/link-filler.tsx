import React, {FC} from 'react';
import {StyledCustomLink} from "../custom-link.styled";
import CustomImage from "../../custom-image/custom-image";
import {ICustomLink} from "../custom-link";

const LinkFiller: FC<ICustomLink> = ({
    padding,
    width,
    height,
    linkName,
    backgroundColor,
    backgroundImage,
    scale,
    size,
    weight,
    textDecoration,
}) => {
    return (
        <>
            {
                linkName ? (
                    <StyledCustomLink
                        padding={padding}
                        background={backgroundColor}
                        width={width}
                        height={height}
                        size={size}
                        weight={weight}
                        textDecoration={textDecoration}
                    >
                        {linkName}
                    </StyledCustomLink>
                ) : null
            }
            {
                backgroundImage ? (
                    <CustomImage
                        position={"absolute"}
                        zIndex={1}
                        backgroundImage={backgroundImage}
                        width={width}
                        height={height || "auto"}
                        scale={scale}
                    />
                ) : null
            }
        </>
    );
};

export default LinkFiller;