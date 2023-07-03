import styled from "styled-components";
import {InputProps} from "./custom-input";


const InputStyled = styled.input<InputProps>`
    display: ${props => props.display};
    padding: 0 10px;
    width: ${props => props.width || "200px"};
    height: ${props => props.height || "40px"};
    font-size: ${props => props.fontSize || "18px"};
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    outline: ${props => "none"};
    border-radius: ${props => props.borderRadius};
    caret-color: ${props => props.caretColor}
`

export {
    InputStyled
}