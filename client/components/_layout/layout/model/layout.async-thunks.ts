import {createAsyncThunk} from "@reduxjs/toolkit";
import {getDocs, query} from "firebase/firestore";
import {firebaseInstance} from "../../../../firebase/firebase-instance";

export const fetchDynamicInfo = createAsyncThunk(
    "layout/fetch-dynamic-info",
    async () => {
        const {dynamicInfoRef} = firebaseInstance;
        const querySnapshot = await getDocs(
            query(dynamicInfoRef!)
        )
        const data: any = []
        querySnapshot.forEach((doc) => {
            data.push(
                doc.data()
            )
        });
        return data;
    }
)