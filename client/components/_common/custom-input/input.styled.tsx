import styled from "styled-components";
import {InputProps} from "./custom-input";


const InputStyled = styled.input<InputProps>`
    
    padding-left: 5px;
    width: ${props => props.width || "200px"};
    height: ${props => props.height || "40px"};
    font-size: ${props => props.fontSize || "18px"};
    background-color: ${props => props.backgroundColor};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    
`

export {
    InputStyled
}