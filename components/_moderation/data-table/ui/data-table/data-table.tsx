import React, {FC, useEffect, useRef} from 'react';
import TableRow from "../table-row/table-row";
import {useSelector} from "react-redux";
import {getFirebaseReports} from "../../../data-window/data-window-selectors";
import {StyledTable, StyledTableBody} from "./table.styled";
import WindowHeader from "../../../data-window/window-header";
import {firebaseInstance} from "../../../../../firebase/firebase-instance";
import {updateFirebaseReport} from "../../../../../firebase/update-firebase-report";
import {DocumentData} from "firebase/firestore";

const DataTable: FC = () => {

    const firebaseReports = useSelector(getFirebaseReports);
    const refHeader = useRef<JSX.Element>(<></>);

    useEffect(()=>{
        refHeader.current = <WindowHeader/>;
    },[])

    return (
        <StyledTable>
            {refHeader.current}
            <StyledTableBody>
                {firebaseReports.map((document: DocumentData, index: number)=>{
                    const tableRowInfo = {
                        id: document.id,
                        document: document,
                        description: document?.description,
                        status: document?.status,
                        community: document?.community,
                        created: document?.created_on,
                        modified: document?.modified_on,
                        photos: document?.photos,
                        location: document?.location,
                        userName: document?.user_name,
                        announcement: document?.announcement
                    }

                    return (
                        <TableRow
                            key={`table-row-${index}`}
                            tableRowInfo={tableRowInfo}
                        />
                    )

                })}
            </StyledTableBody>
        </StyledTable>
    );
};

export default DataTable;