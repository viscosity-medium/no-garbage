import styled from "styled-components";
import colors from "../../../../../styles/globals/colors";

export interface ITableCellStyle {
    backgroundColor?: string
    width?: string
    text?: any
    isColored?: boolean
}

export const TableCellStyle = styled.td<ITableCellStyle>`
    display: inline-flex;
    align-items: center;
    height:48px;
    width: ${props => props.width};
    overflow:hidden;
    padding: 5px 5px 5px 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    border: ${`solid ${colors.tableCellBorder} 1px`};
    background-color: ${props => props.backgroundColor};
`

export const TableHeaderCellStyle = styled.th<ITableCellStyle>`
    display: inline-flex;
    align-items: center;
    height:48px;
    width: ${props => props.width};
    overflow:hidden;
    padding-left: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    border: ${`solid ${colors.tableCellBorder} 1px`};
    background-color: ${props => props.backgroundColor};
`