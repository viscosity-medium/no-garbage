import styled from "styled-components";
import colors from "../../../styles/globals/colors";

export const DataSearchWrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${colors.searchBarColor};
`
export const DataSearchInput = styled.input`
  margin: 12px 0px 12px 40px;
  padding-left: 15px;
  width: 520px;
  height: 40px;
  background: ${colors.white};
  border-radius: 8px;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  color: #000000;
`