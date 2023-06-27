import React, {FC} from 'react';
import VStackStyled from "./v-stack.styled";
import {IStack} from "../h-stack/h-stack.styled";


const VStack: FC<IStack> = ({
    className,
    position = "relative",
    top,
    justify,
    align,
    overflow,
    minWidth,
    width = "auto",
    height= "auto",
    children,
    margin,
    padding,
    textAlign,
    background,
    border,
    borderRadius,
    wrap="no-wrap",
    grow=1,
    opacity,
    transition,
    cursor,
    zIndex
}) => {
    return (
        <VStackStyled
            position={position}
            className={className}
            top={top}
            justify={justify}
            align={align}
            overflow={overflow}
            width={width}
            minWidth={minWidth}
            height={height}
            margin={margin}
            padding={padding}
            textAlign={textAlign}
            background={background}
            border={border}
            borderRadius={borderRadius}
            wrap={wrap}
            grow={grow}
            opacity={opacity}
            transition={transition}
            cursor={cursor}
            zIndex={zIndex}
        >
            {children}
        </VStackStyled>
    );
};

export { VStack} ;