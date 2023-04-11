import React, {FC} from 'react';
import HStackStyled, {IStack} from "./h-stack.styled";

const HStack:FC<IStack> = ({
    position,
    justify,
    align,
    children,
    onClick,
    width = "auto",
    height= "auto",
    margin,
    padding,
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
        <HStackStyled
            position={position}
            onClick={onClick}
            justify={justify}
            align={align}
            width={width}
            height={height}
            margin={margin}
            background={background}
            border={border}
            borderRadius={borderRadius}
            padding={padding}
            wrap={wrap}
            grow={grow}
            opacity={opacity}
            transition={transition}
            cursor={cursor}
        >
            {children}
        </HStackStyled>
    );
};

export default HStack;