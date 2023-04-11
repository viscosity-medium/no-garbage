import styled from "styled-components";
import {StyledLabel} from "../custom-label/custom-label.styled";

export const CustomCheckboxInputStyled = styled.input`
    display: none;
    &:checked + ${StyledLabel}:after {
      opacity: 1;
    }
`;