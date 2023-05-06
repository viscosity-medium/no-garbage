import React from 'react';
import styled from "styled-components";
import {UnorderedListProps} from "./unordered-list";

const UnorderedListStyled = styled.ul<UnorderedListProps>`
    margin: ${props => props.margin};
`

export { UnorderedListStyled };