import React, {useEffect, useRef, useState} from 'react';
import TableRow from "../table-row/table-row";
import {useSelector} from "react-redux";
import {getFirebaseReports} from "../../../data-window/data-window.selectors";
import {StyledTable, StyledTableBody} from "./table.styled";
import WindowHeader from "../../../data-window/window-header";
import {DocumentData} from "firebase/firestore";
import Loading from "../../../../_common/loading/loading";
import {PhotoFileList} from "../../../../../utilities/axios-api";
import {TableRowInfo} from "../../model/data-table.helpers";

const DataTable = React.memo(() => {

    const firebaseReports = useSelector(getFirebaseReports) || [];
    const refHeader = useRef<JSX.Element>(<></>);

    useEffect(()=>{
        refHeader.current = <WindowHeader/>;
    },[])

    return (
        <>
            {
            firebaseReports.length === 0 ? <Loading/> :
                <StyledTable>
                    {refHeader.current}
                    <StyledTableBody>
                        {

                            firebaseReports.map(( document: DocumentData, index: number ) => {

                                const tableRowInfo: TableRowInfo = {
                                    id: document.id || "",
                                    document: document,
                                    description: document?.description || "",
                                    status: document?.status || "",
                                    wasteType: document?.waste_type || "",
                                    community: document?.community || "",
                                    announcement: document?.announcement || "",
                                    created: document?.created_on || "",
                                    modified: document?.modified_on || "",
                                    photos: document?.photos || [],
                                    videos: document?.videos || [],
                                    location: document?.location || "",
                                    userName: document?.user_name || "",
                                    meetUpDate: document?.meet_up?.date || "",
                                    meetUpTime: document?.meet_up?.time || "",
                                    meetUpDescription: document?.meet_up?.description || "",
                                }

                                return (
                                    <TableRow
                                        key={`table-row-${index}`}
                                        tableRowInfo={tableRowInfo}
                                    />
                                )

                            })
                        }
                    </StyledTableBody>
                </StyledTable>
            }
        </>

    );
});

export default DataTable;