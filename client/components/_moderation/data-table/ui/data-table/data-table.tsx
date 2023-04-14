import React, {FC, useEffect, useRef} from 'react';
import TableRow from "../table-row/table-row";
import {useSelector} from "react-redux";
import {getFirebaseReports} from "../../../data-window/data-window-selectors";
import {StyledTable, StyledTableBody} from "./table.styled";
import WindowHeader from "../../../data-window/window-header";
import {DocumentData} from "firebase/firestore";
import Loading from "../../../../_common/loading/loading";
import {axiosApi, PhotoFileList} from "../../../../../utilities/axios-api";

const DataTable: FC = () => {

    let fileList: PhotoFileList[] = []
    const firebaseReports = useSelector(getFirebaseReports);
    const refHeader = useRef<JSX.Element>(<></>);

    useEffect(()=>{
        refHeader.current = <WindowHeader/>;
    },[])

    useEffect(()=>{

        (async () => {
            firebaseReports.map(async( document: DocumentData, index: number ) => {


                fileList = [
                    ...fileList,
                    document.photos.map((photoObject) => (
                        {
                            url: photoObject.url,
                            previewImageUrl: photoObject.preview_image_url
                        }
                    ))
                ]

                if (firebaseReports.length === index + 1) {
                    await axiosApi.processTheFileListAndSaveThemIntoBucket({fileList})
                    console.log(fileList)
                }
            })
        })()

    },[firebaseReports])

    return (
        <StyledTable>
            {refHeader.current}
            <StyledTableBody>
                {
                    firebaseReports.length === 0 ? <Loading/> :
                    firebaseReports.map(( document: DocumentData, index: number ) => {


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

                    })
                }
            </StyledTableBody>
        </StyledTable>
    );
};

export default DataTable;