import React, {FC} from 'react';
import {TextAreaProps, TextAreaStyled} from "./text-area.styled";

const TextArea: FC<TextAreaProps> = ({
    width,
    height,
    margin,
    placeholderText,
    placeholderFontSize,
    onChangeHandler,
    textAreaValue,
    reference,
    border,
    borderRadius,
    outline,
    color
}) => {

    return (
        <TextAreaStyled
            value={textAreaValue}
            style={{
                padding: "7px 12px",
                fontSize: "16px"
            }}
            onChange={onChangeHandler}
            ref={reference}
            width={width}
            height={height}
            margin={margin}
            placeholder={placeholderText}
            placeholderFontSize={placeholderFontSize}
            border={border}
            borderRadius={borderRadius}
            outline={outline}
            backgroundColor={"rgba(255,255,255,0)"}
            color={color}
        />
    );

};

export {TextArea};