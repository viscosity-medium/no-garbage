import {FC} from 'react';
import TableCell from "../table-cell/table-cell";
import colors from "../../../../../styles/globals/colors";
import {StyledRow} from "./table-row.styled";
import {useDispatch, useSelector} from "react-redux";
import {windowHeaderData} from "../../../data-window/model/window-header-data";
import {
    getModalVisibility
} from "../../../moderation-location-info-sidebar/model/moderation-location-info-sidebar.selectors";
import {DateOptions, ITableRow} from "../../model/data-table.types";
import {onTableRowClickHandler} from "../../model/data-table.helpers";
import {getModerationTableChosenRow} from "../../../data-window/model/data-window.selectors";

export const dateOptions: DateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

const TableRow: FC<ITableRow> = ({
    tableRowInfo,
    index
}) => {

    const modalVisibility = useSelector(getModalVisibility);
    const chosenRow = useSelector(getModerationTableChosenRow) === index;
    const dispatch = useDispatch();

    return (
        <StyledRow
            position={"relative"}
            isChosen={chosenRow}
            onClick={
                onTableRowClickHandler({
                    index,
                    tableRowInfo,
                    dispatch,
                    modalVisibility
                })
            }
        >
            {
                windowHeaderData({tableRowInfo}).map((tableCell)=>(
                    <TableCell
                        key={tableCell.text + tableCell.data}
                        width={tableCell.width}
                        text={tableCell.data}
                        isColored={tableCell.text === "Status"}
                        backgroundColor={colors.tableCellDefault}
                    />
                ))
            }
        </StyledRow>
    );
};

export default TableRow;