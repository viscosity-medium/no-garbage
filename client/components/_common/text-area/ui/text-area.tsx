import React, {FC} from 'react';
import {ITextArea, TextAreaStyled} from "./text-area.styled";

const TextArea: FC<ITextArea> = ({
    width,
    height,
    margin,
    placeholderText,
    placeholderFontSize,
    onChangeHandler,
    textAreaValue,
    reference
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
            border={"none"}
            outline={"none"}
            backgroundColor={"rgba(255,255,255,0)"}
        />
    );

};

export {TextArea};