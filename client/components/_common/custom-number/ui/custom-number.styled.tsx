import React, {ReactNode} from 'react';
import styled from "styled-components";
import colors from "../../../../styles/globals/colors";

export interface ICustomNumber {
    number?: string | number
    fontSize: string
    color?: string
    children?: ReactNode
}

const StyledNumber = styled.span<ICustomNumber>`
    font-size: ${props => props.fontSize};
    font-weight: 600;
    color: ${colors.veryDarkGrey};
    line-height: 1.2;
`;

export {
    StyledNumber
}