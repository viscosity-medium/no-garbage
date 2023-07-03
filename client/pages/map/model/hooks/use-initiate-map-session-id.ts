import {useEffect} from "react";
import {mapPageActions} from "../map-page.slice";
import {useAppDispatch} from "../../../../store/store";
import { v4 as uuidv4 } from 'uuid';

export const useInitiateMapSessionId = () => {

    const dispatch = useAppDispatch();

    useEffect(()=> {
        const uniqueMapSessionId: string = `${new Date().toISOString().replace(/\..*$|T/gm,"__")}${uuidv4()}`;
        dispatch(mapPageActions.setUniqueMapSessionId(uniqueMapSessionId))
    },[]);

}
