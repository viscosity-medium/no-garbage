import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../../../configs/axios-config";

export const fetchFirebaseReports = createAsyncThunk(
    'data-table/fetch-firebase-reports',
    async ({filter, order, paginationQuantity = "50", searchBarValue, currentPage }: any) => {

        const params = {
            filter, order,
            currentPage,
            paginationQuantity,
            searchBarValue
        };

        const {data: response} = await axiosInstance.get(
            "firebase/get-specific-firebase-collections",
            {params}
        ) as any;

        return {
            data: response.data,
            totalDocsCount: response.totalDocsCount
        };

    }
);