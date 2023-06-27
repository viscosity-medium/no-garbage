import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCountFromServer, getDocs} from "firebase/firestore";
import {setFirebaseQuery} from "../../../../firebase/set-firebase-query";
import {getSortedFirebaseData} from "../../../../firebase/get-sorted-firebase-data";
import {firebaseInstance} from "../../../../firebase/firebase-instance";

export const fetchFirebaseReports = createAsyncThunk(
    'data-table/fetch-firebase-reports',
    async ({filter, order, paginationQuantity = "50", searchBarValue, paginationDirection, firstDoc, lastDoc}: any) => {

        const {reportsCountPromise} = firebaseInstance;
        const querySnapshot = await getDocs(
            setFirebaseQuery({
                paginationQuantity,
                searchBarValue,
                order, filter,
                paginationDirection,
                firstDoc, lastDoc
            })
        );
        const reportsCount = await reportsCountPromise;
        const firstVisibleDoc = querySnapshot.docs[0];
        const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length-1];
        const data = getSortedFirebaseData({querySnapshot, order, filter});
        return {
            data,
            firstVisibleDoc,
            lastVisibleDoc,
            reportsCount
        };

    }
);