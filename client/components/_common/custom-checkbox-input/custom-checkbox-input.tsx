import React from 'react';
import {CustomCheckboxInputStyled} from "./custom-checkbox-input.styled";

const CustomCheckboxInput = ({id, checked, onChange}) => {
    return (
        <CustomCheckboxInputStyled
            id={id}
            type={"checkbox"}
            checked={checked}
            onChange={onChange}
        />
    );
};

export default CustomCheckboxInput;