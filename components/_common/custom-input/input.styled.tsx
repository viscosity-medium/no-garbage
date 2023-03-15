import styled from "styled-components";

interface Input {
    height?: string | number
    width?: string | number
    fontSize?: string | number
}

const InputStyled = styled.input<Input>`
    
    padding-left: 5px;
    width: ${props => props.width || "200px"};
    height: ${props => props.height || "40px"};
    font-size: ${props => props.fontSize || "18px"};
    
`

export {
    InputStyled
}