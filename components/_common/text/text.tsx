import React, {FC, ReactNode} from 'react';
import { StyledH1 } from "./text-components/h1.styled";
import { StyledH2 } from './text-components/h2.styled';
import {StyledH3} from "./text-components/h3.styled";
import {StyledSpan} from "./text-components/span.styled";
import colors from "../../../styles/globals/colors";

interface IText {
    children?: ReactNode
    position?: string
    display?: string
    tag: string
    text?: string
    left?: string
    width?: string
    right?: string
    bottom?: string
    top?: string
    size?: string
    weight?: string
    textAlign?: string
    alignSelf?:string
    color?: string
    margin?: string,
    lineHeight?: string
}
const Text: FC<IText> = ({
    children,
    position,
    display,
    width,
    tag,
    text,
    weight,
    left,
    right,
    bottom,
    top,
    size,
    textAlign,
    alignSelf,
    color= colors.veryDarkGrey,
    margin,
    lineHeight
}) => {
    if(tag === "h1"){
        return <StyledH1
            position={position}
            display={display}
            width={width}
            left={left}
            right={right}
            bottom={bottom}
            top={top}
            size={size}
            weight={weight}
            alignSelf={alignSelf}
            textAlign={textAlign}
            color={color}
            margin={margin}
            lineHeight={lineHeight}
        >
            {children ? children : text ? text : children}
        </StyledH1>;
    }
    if(tag === "h2"){
        return <StyledH2
            position={position}
            display={display}
            width={width}
            left={left}
            right={right}
            bottom={bottom}
            top={top}
            size={size}
            weight={weight}
            alignSelf={alignSelf}
            textAlign={textAlign}
            color={color}
            margin={margin}
            lineHeight={lineHeight}
        >
            {children ? children : text ? text : children}
        </StyledH2>;
    }
    if(tag === "h3"){
        return <StyledH3
            position={position}
            display={display}
            width={width}
            left={left}
            right={right}
            bottom={bottom}
            top={top}
            size={size}
            weight={weight}
            alignSelf={alignSelf}
            textAlign={textAlign}
            color={color}
            margin={margin}
            lineHeight={lineHeight}
        >
            {children ? children : text ? text : children}
        </StyledH3>;
    }
    if(tag === "span"){
        return (
            <StyledSpan
                position={position}
                display={display}
                width={width}
                left={left}
                right={right}
                bottom={bottom}
                top={top}
                size={size}
                weight={weight}
                alignSelf={alignSelf}
                textAlign={textAlign}
                color={color}
                margin={margin}
                lineHeight={lineHeight}
            >
                {children ? children : text ? text : children}
            </StyledSpan>
        );
    }
    return null
};

export default Text;