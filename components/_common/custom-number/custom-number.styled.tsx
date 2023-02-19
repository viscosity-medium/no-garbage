import React, {ReactNode} from 'react';
import styled from "styled-components";

export interface ICustomNumber {
    number?: string | number
    fontSize: string
    color?: string
    children?: ReactNode
}

const StyledNumber = styled.span<ICustomNumber>`
  font-family: Montserrat;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  line-height: 1.2;
`;

export {
    StyledNumber
}