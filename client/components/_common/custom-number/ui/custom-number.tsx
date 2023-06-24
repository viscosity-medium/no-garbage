import React, {FC} from 'react';
import {ICustomNumber, StyledNumber} from "./custom-number.styled";

const CustomNumber: FC<ICustomNumber> = ({
    number,
    fontSize,
    color
}) => {
    return (
        <StyledNumber
            fontSize={fontSize}
            color={color}
        >
            {number}
        </StyledNumber>
    );
};

export {CustomNumber};