import React, {FC} from 'react';
import { StyledH1 } from "./text-components/h1.styled";
import { StyledH2 } from './text-components/h2.styled';
import {StyledH3} from "./text-components/h3.styled";
import {StyledSpan} from "./text-components/span.styled";

interface IText {
    position?: string
    display?: string
    tag: string
    text: string
    left?: string
    width?: string
    right?: string
    bottom?: string
    top?: string
    size?: string
    textAlign?: string
}
const Text: FC<IText> = ({
    position,
    display,
    width,
    tag,
    text,
    left,
    right,
    bottom,
    top,
    size,
    textAlign
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
            textAlign={textAlign}
        >
            {text}
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
            textAlign={textAlign}
        >
            {text}
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
            textAlign={textAlign}
        >
            {text}
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
                textAlign={textAlign}
            >
                {text}
            </StyledSpan>
        );
    }
    return null
};

export default Text;