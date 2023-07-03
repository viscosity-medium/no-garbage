import {useEffect} from "react";

import {useAppDispatch} from "../../../../store/store";
import {fetchDynamicInfo} from "./layout.async-thunks";

export const useFetchDynamicInfo = () => {

    if( typeof window !== "undefined"){
        const dispatch = useAppDispatch();
        useEffect(()=> {
            dispatch(fetchDynamicInfo())
        },[])
    }

}