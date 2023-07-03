import styled from "styled-components";

export interface ITextArea {
    width?: string
    height?: string
    margin?: string
    textAreaValue?: string
    placeholderText?: string
    placeholderFontSize?: string
    onChangeHandler?: (e: any) => void
    reference?: any
    backgroundColor?: string
    border?: string
    outline?: string
}

export const TextAreaStyled = styled.textarea<ITextArea>`
    min-width: ${props => props.width};
    max-width: ${props => props.width};
    min-height: ${props => props.height};
    max-height: ${props => props.height};
    margin: ${props => props.margin};
    padding: 2px 12px;
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    outline: ${props => props.outline};
    resize: none;
    overflow-y: hidden;
        &::placeholder{
            font-size: ${props => props.placeholderFontSize || "16px"};
            color: #61646B;
        }
`