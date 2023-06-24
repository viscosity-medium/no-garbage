import React from 'react';
import {StyledLabel} from "./custom-label.styled";

const CustomLabel = ({id}) => {
    return (
        <StyledLabel htmlFor={id}/>
    );
};

export {CustomLabel};