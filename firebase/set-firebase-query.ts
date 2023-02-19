import {limit, query, where, orderBy, startAfter} from "firebase/firestore";
import {firebaseInstance} from "./firebase-instance";

export const setFirebaseQuery = ({ paginationQuantity, searchBarValue, order}) => {

    const { reportsRef } = firebaseInstance;
    return query(
        reportsRef!,
        where("description", ">=", searchBarValue),
        where("description", "<=", searchBarValue+ '\uf8ff'),
        orderBy("description", order),
        limit(+paginationQuantity),
    )
};