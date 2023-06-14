import React, {FC} from 'react';
import {ITextArea, TextAreaStyled} from "./text-area.styled";

const TextArea: FC<ITextArea> = ({
    width,
    height,
    margin,
    placeholderText,
    placeholderFontSize,
    onChangeHandler,
    textAreaValue
}) => {

    return (
        <TextAreaStyled
            width={width}
            height={height}
            margin={margin}
            placeholder={placeholderText}
            placeholderFontSize={placeholderFontSize}
            value={textAreaValue}
            onChange={onChangeHandler}
        />
    );

};

export default TextArea;