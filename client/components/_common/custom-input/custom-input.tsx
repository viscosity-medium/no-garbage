import React, {ForwardedRef, forwardRef, InputHTMLAttributes, Ref, RefObject, useEffect} from 'react';
import {InputStyled} from "./input.styled";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

export interface InputProps extends HTMLInputProps {
    className?: string
    display?: string
    value?: string
    onChange?: (value) => void
    onEnter?: () => void
    ref?: Ref<HTMLInputElement>
    width?: string | number
    height?: string | number
    fontSize?: string
    color?: string
    backgroundColor?: string
    border?: string
    borderRadius?: string
    caretColor?: string;
    accept?: string
}
const CustomInput = forwardRef( function CustomInput( props:InputProps, ref: Ref<HTMLInputElement> ) {

    const {
        value,
        display,
        onChange,
        onEnter,
        type="text",
        width,
        height,
        fontSize,
        color,
        backgroundColor,
        border,
        borderRadius,
        caretColor,
        multiple,
        accept
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
    }

    const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            onEnter?.();
        }
    }


    return (
        <InputStyled
            display={display}
            value={value}
            ref={ref}
            onChange={onChangeHandler}
            onKeyDown={onEnterHandler}
            type={type}
            width={width}
            height={height}
            fontSize={fontSize}
            color={color}
            backgroundColor={backgroundColor}
            border={border}
            borderRadius={borderRadius}
            caretColor={caretColor}
            multiple={multiple}
            accept={accept}
        />
    );
});

export default CustomInput;