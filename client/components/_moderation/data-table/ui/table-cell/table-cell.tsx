import React, {FC} from 'react';
import {ITableCellStyle, TableCellStyle} from "./table-cell.styled";
import TableCellContentWrapper from "../table-cell-content-wrapper/table-cell-content-wrapper";
import colors from "../../../../../styles/globals/colors";
import {useDefineCellTableColor} from "../../../../../hooks/use-define-cell-table-color";

const TableCell: FC<ITableCellStyle> = ({
    backgroundColor = colors.tableCellDefault ,
    width,
    text,
    isColored = false
}) => {

    const cellColor = isColored ? useDefineCellTableColor({status: text}) : backgroundColor;

    return (
        <TableCellStyle
            width={width}
            backgroundColor={cellColor}
        >
            <TableCellContentWrapper
                text={text}
            />
        </TableCellStyle>
    );
};

export default TableCell;