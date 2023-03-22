import React, {FC, useEffect} from 'react';
import TableCell from "../table-cell/table-cell";
import colors from "../../../../styles/globals/colors";
import {StyledRow} from "./table-row.styled";
import { batch, useDispatch } from "react-redux";
import { modalActions } from "../../modal/modal.slice";

interface ITableRow {
    tableRowInfo: {
        id: string,
        document?: any,
        description?: string
        status?: string
        community?: string
        created?: any
        modified?: any
        announcement?: string
        location?: {
            lon: number,
            lat: number
        },
        photos?: string[]
    }
}
const TableRow: FC<ITableRow> = ({
    tableRowInfo
}) => {

    const {
        id,
        document,
        description,
        status,
        created,
        modified,
        community,
        announcement,
        location,
        photos,
    } = tableRowInfo;

    const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateAdded = created ? new Date(created * 1000).toLocaleDateString("en-US", options) : "————";
    const dateModified = modified ? new Date(modified * 1000).toLocaleDateString("en-US", options) : "————";

    const dispatch = useDispatch();
    const onClickHandler = () => {
        batch(()=>{
            dispatch(modalActions.setVisibility());
            dispatch(modalActions.setContent({
                id,
                document,
                description,
                status,
                community,
                created: dateAdded,
                modified: dateModified,
                announcement,
                photos,
                location
            }));
            dispatch(modalActions.setSaveButtonState({
                text: "Edit form to save changes",
                isActive: false,
                textColor: colors.white,
                backgroundColor: colors.tableCellBorder
            }))
        })
    };


    return (
        <StyledRow
            position={"relative"}
            onClick={onClickHandler}
        >

            <TableCell
                width={"25%"}
                text={description}
                backgroundColor={colors.tableCellDefault}
            />
            <TableCell
                width={"18%"}
                text={community}
                backgroundColor={colors.white}
            />
            <TableCell
                width={"18%"}
                text={status}
                isColored={true}
                backgroundColor={colors.tableCellDefault}
            />
            <TableCell
                width={"18%"}
                text={dateAdded}
                backgroundColor={colors.white}
            />
            <TableCell
                width={"35%"}
                text={dateModified}
                backgroundColor={colors.tableCellDefault}
            />
        </StyledRow>
    );
};

export default TableRow;