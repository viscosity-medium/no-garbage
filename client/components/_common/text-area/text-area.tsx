import React, {FC} from 'react';
import {ITextArea, TextAreaStyled} from "./text-area.styled";

const TextArea: FC<ITextArea> = ({
    width,
    height,
    margin,
    placeholderText,
    placeholderFontSize
}) => {
    return (
        <TextAreaStyled
            width={width}
            height={height}
            margin={margin}
            placeholder={placeholderText}
            placeholderFontSize={placeholderFontSize}
        />
    );
};

export default TextArea;