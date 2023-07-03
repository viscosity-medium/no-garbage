import React from 'react';
import {CustomCheckboxInputStyled} from "./custom-checkbox-input.styled";

const CustomCheckboxInput = ({id, reference, checked, onChange}: {
    id: string,
    checked: boolean
    onChange: any
    reference?: any
}) => {
    return (
        <CustomCheckboxInputStyled
            id={id}
            ref={reference}
            type={"checkbox"}
            checked={checked}
            onChange={onChange}
        />
    );
};

export { CustomCheckboxInput };