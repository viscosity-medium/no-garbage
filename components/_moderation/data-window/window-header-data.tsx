import {dateOptions} from "../data-table/ui/table-row/table-row";
import colors from "../../../styles/globals/colors";
import {ITableRow} from "../data-table/model/data-table.types";


export const windowHeaderData = ({tableRowInfo}: ITableRow) => [

    {
        text: "Title",
        width: "21%",
        data: tableRowInfo?.description,
        backgroundColor: colors.tableCellDefault
    },
    {
        text: "Community",
        width: "15%",
        data: tableRowInfo?.community,
        backgroundColor: colors.white
    },
    {
        text: "Status",
        width: "15%",
        data: tableRowInfo?.status,
        backgroundColor: colors.tableCellDefault
    },
    {
        text: "Date Added",
        width: "15%",
        data: tableRowInfo?.created ? new Date(tableRowInfo?.created * 1000).toLocaleDateString("en-US", dateOptions) : "————",
        backgroundColor: colors.white
    },
    {
        text: "Date Modified",
        width: "31%",
        data: tableRowInfo?.modified ? new Date(tableRowInfo?.modified * 1000).toLocaleDateString("en-US", dateOptions) : "————",
        backgroundColor: colors.tableCellDefault
    },
]