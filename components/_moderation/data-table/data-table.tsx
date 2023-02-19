import React, {FC} from 'react';
import TableRow from "./table-row/table-row";
import {useSelector} from "react-redux";
import {getFirebaseReports} from "../data-window/data-window-selectors";
import {StyledTable, StyledTableBody} from "./table.styled";

const DataTable: FC = () => {
    const firebaseReports = useSelector(getFirebaseReports);
    return (
        <StyledTable>
            <StyledTableBody>
                {firebaseReports.map((document: any, index)=>{
                    return (
                        <TableRow
                            key={`table-row-${index}`}
                            description={document.description}
                            status={document.status}
                            created={document.created_on}
                            photos={document.photos}
                            location={document.location}
                            announcement={"https://t.me/tbilisi_cleanups/5887"}
                        />
                    )
                })}
            </StyledTableBody>
        </StyledTable>
    );
};

export default DataTable;