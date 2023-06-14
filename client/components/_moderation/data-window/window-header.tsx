import React from 'react';
import {windowHeaderData} from "./window-header-data";
import {useTranslation} from "next-i18next";
import colors from "../../../styles/globals/colors";
import TableHeaderCell from "../data-table/ui/table-cell/table-header-cell";
import TableHeader from "../data-table/ui/table-header/table-header";
import {StyledRow} from "../data-table/ui/table-row/table-row.styled";

const WindowHeader = () => {

    const { t } = useTranslation( "moderation" );
    const tableRowInfo = { id: "table-header" };

    return (
        <TableHeader
            width={"100%"}
        >
            <StyledRow
                position={"relative"}
                width={"100%"}
            >
                {
                    windowHeaderData({tableRowInfo}).map((header,index) => (
                        <TableHeaderCell
                            key={`${header}-${index}`}
                            width={header.width}
                            text={header.text}
                            backgroundColor={colors.moderationTableHeader}
                            isColored={false}
                        />
                    ))
                }
            </StyledRow>
        </TableHeader>

    );
};

export default WindowHeader;