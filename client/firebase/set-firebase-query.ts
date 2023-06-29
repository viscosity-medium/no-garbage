import {limit, query, where, orderBy, startAfter, endBefore, limitToLast, startAt} from "firebase/firestore";
import { firebaseInstance } from "./firebase-instance";

export const setFirebaseQuery = ({
    paginationQuantity,
    searchBarValue,
    order,
    filter,
    firstDoc, lastDoc
}) => {

    const { reportsRef } = firebaseInstance;

    // if(paginationDirection === "freeze"){
    //     if(searchBarValue.length === 0){
    //         return query(
    //             reportsRef!,
    //             orderBy(filter, order),
    //             limit(+paginationQuantity),
    //         )
    //     } else {
    //         return query(
    //             reportsRef!,
    //             where("description", ">=", searchBarValue),
    //             where("description", "<=", searchBarValue+ '\uf8ff'),
    //             orderBy("description", order),
    //             limit(+paginationQuantity),
    //         )
    //     }
    // } else if(paginationDirection === "next"){
    //     return query(
    //         reportsRef!,
    //         orderBy(filter, order),
    //         startAfter(lastDoc),
    //         limit(+paginationQuantity),
    //     )
    // } else if(paginationDirection === "prev"){
    //     return query(
    //         reportsRef!,
    //         orderBy(filter, order),
    //         endBefore(firstDoc),
    //         limitToLast(+paginationQuantity),
    //     )
    // } else if (paginationDirection === "save"){
    //     return query(
    //         reportsRef!,
    //         orderBy(filter, order),
    //         startAt(firstDoc),
    //         limit(+paginationQuantity),
    //     )
    // } else{
    //     return query(
    //         reportsRef!,
    //         orderBy(filter, order),
    //         limit(+paginationQuantity),
    //     )
    // }

    return query(
        reportsRef!,
        orderBy(filter, order),
        limit(+paginationQuantity),
    )

};