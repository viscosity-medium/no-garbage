import React, {FC} from 'react';
import {ITextArea, TextAreaStyled} from "./text-area.styled";

const TextArea: FC<ITextArea> = ({width, height, margin}) => {
    return (
        <TextAreaStyled
            width={width}
            height={height}
            margin={margin}
            placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in ex eleifend, faucibus libero ac, lobortis leo."}
        />
    );
};

export default TextArea;