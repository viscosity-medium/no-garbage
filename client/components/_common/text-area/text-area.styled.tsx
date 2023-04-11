import styled from "styled-components";

export interface ITextArea {
    width?: string
    height?: string
    margin?: string
}

export const TextAreaStyled = styled.textarea<ITextArea>`
  min-width: ${props => props.width};
  max-width: ${props => props.width};
  min-height: ${props => props.height};
  max-height: ${props => props.height};
  margin: ${props => props.margin};
  padding: 12px;
  &::placeholder{
    font-size: 16px;
    color: #61646B;
  }
`