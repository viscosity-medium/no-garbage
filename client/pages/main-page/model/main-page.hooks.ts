import {useEffect} from "react";
import {fetchMainPageDynamicInfo} from "./main-page.async-thunks";
import {useAppDispatch} from "../../../store/store";

export const useFetchDynamicInfo = () => {

    if( typeof window !== "undefined"){
        const dispatch = useAppDispatch();
        useEffect(()=> {
            dispatch(fetchMainPageDynamicInfo())
        },[])
    }

}