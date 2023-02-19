import React, {FC} from 'react';
import TableCell from "../table-cell/table-cell";
import colors from "../../../../styles/globals/colors";
import {StyledRow} from "./table-row.styled";
import {batch, useDispatch} from "react-redux";
import {modalActions} from "../../modal/modal-slice";

interface ITableRow {
    description?: string
    status?: string
    created?: any
    announcement?: string
    location: {
        lon: number,
        lat: number
    }
    photos?: string[]
}
const TableRow: FC<ITableRow> = ({
    description,
    status,
    created,
    announcement,
    photos,
    location
}) => {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(created * 1000).toLocaleDateString("en-US", options);

    const dispatch = useDispatch();
    const onClickHandler = () => {
        batch(()=>{
            dispatch(modalActions.setVisibility());
            dispatch(modalActions.setContent({
                description,
                status,
                created: date,
                announcement,
                photos,
                location
            }));
        })
    };
    return (
        <StyledRow
            position={"relative"}
            onClick={onClickHandler}
        >
            <TableCell
                width={"30%"}
                backgroundColor={colors.tableCellDark}
                text={description}
            />
            <TableCell
                width={"15%"}
                backgroundColor={colors.tableCellLight}
                text={status}
            />
            <TableCell
                width={"20%"}
                backgroundColor={colors.tableCellDark}
                text={date}
            />
            <TableCell
                width={"35%"}
                backgroundColor={colors.tableCellLight}
                text={announcement}
            />
        </StyledRow>
    );
};

export default TableRow;