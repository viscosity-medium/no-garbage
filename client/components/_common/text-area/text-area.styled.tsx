import styled from "styled-components";

export interface ITextArea {
    width?: string
    height?: string
    margin?: string
    textAreaValue?: string
    placeholderText?: string
    placeholderFontSize?: string
    onChangeHandler?: (e: any) => void
}

export const TextAreaStyled = styled.textarea<ITextArea>`
    min-width: ${props => props.width};
    max-width: ${props => props.width};
    min-height: ${props => props.height};
    max-height: ${props => props.height};
    margin: ${props => props.margin};
    padding: 12px;
    overflow-y: hidden;
        &::placeholder{
            font-size: ${props => props.placeholderFontSize || "16px"};
            color: #61646B;
        }
`