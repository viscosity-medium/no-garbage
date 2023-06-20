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
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import Text from "../../../../_common/text/text";

const DataTable = React.memo(() => {

    const firebaseReports = useSelector(getFirebaseReports) || undefined;
    const refHeader = useRef<JSX.Element>(<></>);
    console.log(firebaseReports)
    useEffect(()=>{
        refHeader.current = <WindowHeader/>;
    },[])

    return (
        <>
            {
            firebaseReports === undefined ? <Loading/> :
                firebaseReports.length > 0 ?
                    (
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
                    ) : (
                        <HStack
                            height={"100%"}
                            width={"100%"}
                            align={"center"}
                            justify={"center"}
                        >
                            <Text
                                tag={"h2"}
                            >
                                No info...
                            </Text>
                        </HStack>
                    )
            }
        </>

    );
});

export default DataTable;