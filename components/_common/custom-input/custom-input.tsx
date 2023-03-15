import React, {InputHTMLAttributes} from 'react';
import {InputStyled} from "./input.styled";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends  HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value) => void
    width?: string | number
    height?: string | number
}
const CustomInput = ({
    value,
    onChange,
    type="text",
    width,
    height
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
        />
    );
};

export default CustomInput;