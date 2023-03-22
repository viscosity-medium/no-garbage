import React, {InputHTMLAttributes} from 'react';
import {InputStyled} from "./input.styled";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

export interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value) => void
    width?: string | number
    height?: string | number
    fontSize?: string
    backgroundColor?: string
    border?: string
    borderRadius?: string
}
const CustomInput = ({
    value,
    onChange,
    type="text",
    width,
    height,
    fontSize,
    backgroundColor,
    border,
    borderRadius
}: InputProps) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <InputStyled
            value={value}
            onChange={onChangeHandler}
            type={type}
            width={width}
            height={height}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            border={border}
            borderRadius={borderRadius}
        />
    );
};

export default CustomInput;