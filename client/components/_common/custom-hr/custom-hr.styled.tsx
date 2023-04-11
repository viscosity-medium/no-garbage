import React from 'react';
import styled from "styled-components";

export interface IHr {
    width?: string | number
    height?: string | number
    backgroundColor?: string
    margin?: string
    opacity?: number
}

const StyledHr = styled.hr<IHr>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    margin: ${props => props.margin};
    opacity: ${props => props.opacity};
    transition: 0.5s;
    border: none;
`

export default StyledHr;