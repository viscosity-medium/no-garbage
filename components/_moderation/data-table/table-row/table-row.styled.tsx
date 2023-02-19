import styled from "styled-components";

interface IStyledRow {
    position: string
}

export const StyledRow = styled.tr<IStyledRow>`
  display: flex;
  position: ${props => props.position};
  margin-bottom: 4px;
  transition: 0.2s;
  cursor: pointer;
  &:hover{
    scale: 1.015;
  }
`