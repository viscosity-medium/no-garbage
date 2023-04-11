import React, {ForwardedRef, forwardRef, InputHTMLAttributes, Ref, RefObject, useEffect} from 'react';
import {InputStyled} from "./input.styled";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

export interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value) => void
    onEnter?: () => void
    ref?: Ref<HTMLInputElement>
    width?: string | number
    height?: string | number
    fontSize?: string
    backgroundColor?: string
    border?: string
    borderRadius?: string
}
const CustomInput = forwardRef( function CustomInput( props:InputProps, ref: Ref<HTMLInputElement> ) {

    const {
        value,
        onChange,
        onEnter,
        type="text",
        width,
        height,
        fontSize,
        backgroundColor,
        border,
        borderRadius,
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            onEnter?.();
        }
    }


    return (
        <InputStyled
            value={value}
            ref={ref}
            onChange={onChangeHandler}
            onKeyDown={onEnterHandler}
            type={type}
            width={width}
            height={height}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            border={border}
            borderRadius={borderRadius}
        />
    );
});

export default CustomInput;