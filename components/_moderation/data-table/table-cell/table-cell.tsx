import React, {FC} from 'react';
import {ITableCellStyle, TableCellStyle} from "./table-cell.styled";
import TableCellContentWrapper from "./table-cell-content-wrapper/table-cell-content-wrapper";

const TableCell: FC<ITableCellStyle> = ({backgroundColor, width, text}) => {
    return (
        <TableCellStyle
            width={width}
            backgroundColor={backgroundColor}
        >
            <TableCellContentWrapper
                text={text}
            />
        </TableCellStyle>
    );
};

export default TableCell;