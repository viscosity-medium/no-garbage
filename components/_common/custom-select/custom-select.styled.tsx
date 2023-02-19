import styled from "styled-components";

const StyledSelect = styled.select`
  font-family: 'Montserrat';
  width: 138px;
  height: 54px;
  background: #F0F4E3;
  border: none;
  border-radius: 8px;
  outline: none;
`

const StyledOption = styled.option`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #000000;
`

export { StyledSelect, StyledOption}