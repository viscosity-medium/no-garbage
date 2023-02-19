import React, {FC} from 'react';
import VStackStyled from "./v-stack.styled";
import {IStack} from "../h-stack/h-stack.styled";


const VStack: FC<IStack> = ({
    position = "relative",
    justify,
    align,
    overflow,
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
    cursor
}) => {
    return (
        <VStackStyled
            position={position}
            justify={justify}
            align={align}
            overflow={overflow}
            width={width}
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
        >
            {children}
        </VStackStyled>
    );
};

export default VStack;