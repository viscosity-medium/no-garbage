import styled from "styled-components";

export interface ITableCellStyle {
    backgroundColor: string
    width?: string
    text?: any
}

export const TableCellStyle = styled.td<ITableCellStyle>`
  display: inline-flex;
  align-items: center;
  height:48px;
  width: ${props => props.width};
  overflow:hidden;
  font-family: 'Montserrat';
  padding-left: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  background-color: ${props => props.backgroundColor};
`
