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
    const editedText = text?.length > 60 ? `${text?.slice(0, 60)}...` : text;

    return (
        <TableCellStyle
            width={width}
            backgroundColor={cellColor}
        >
            <TableCellContentWrapper
                text={editedText}
            />
        </TableCellStyle>
    );
};

export default TableCell;