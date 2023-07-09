import styled from "styled-components";

export interface TextAreaProps {
    width?: string
    height?: string
    margin?: string
    textAreaValue?: string
    placeholderText?: string
    placeholderFontSize?: string
    onChangeHandler?: (e: any) => void
    reference?: any
    backgroundColor?: string
    color?: string
    border?: string
    borderRadius?: string
    outline?: string
}

export const TextAreaStyled = styled.textarea<TextAreaProps>`
    min-width: ${props => props.width};
    max-width: ${props => props.width};
    min-height: ${props => props.height};
    max-height: ${props => props.height};
    margin: ${props => props.margin};
    padding: 2px 12px;
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    outline: ${props => props.outline};
    resize: none;
    overflow-y: hidden;
        &::placeholder{
            font-size: ${props => props.placeholderFontSize || "16px"};
            color: #61646B;
        }
`