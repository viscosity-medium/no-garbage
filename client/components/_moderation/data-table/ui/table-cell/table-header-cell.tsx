import React, {FC} from 'react';
import {ITableCellStyle, TableHeaderCellStyle} from "./table-cell.styled";
import TableCellContentWrapper from "../table-cell-content-wrapper/table-cell-content-wrapper";
import colors from "../../../../../styles/globals/colors";
import {useDefineCellTableColor} from "../../../../../hooks/use-define-cell-table-color";

const TableHeaderCell: FC<ITableCellStyle> = ({
    backgroundColor = colors.tableCellDefault ,
    width,
    text,
    isColored = false
}) => {

    const cellColor = isColored ? useDefineCellTableColor({status: text}) : backgroundColor;

    return (
        <TableHeaderCellStyle
            width={width}
            backgroundColor={cellColor}
        >
            <TableCellContentWrapper
                text={text}
                margin={"5px 0"}
            />
        </TableHeaderCellStyle>
    );

};

export default TableHeaderCell;