import { doc, updateDoc } from "firebase/firestore";
import { firebaseInstance } from "./firebase-instance";
import {useAppDispatch} from "../store/store";
import {fetchFirebaseReports} from "../components/_moderation/data-window/data-window-slice";
import {useSelector} from "react-redux";
import {getFilterValue, getOrderValue} from "../components/_common/filter-switcher/filter-switch-selectors";
import {getPaginationQuantity} from "../components/_moderation/pagination-panel/pagination-selectors";
import {getSearchBarValue} from "../components/_moderation/data-window/data-window-selectors";

const updateFirebaseReport = async ({modalForm}) => {

    const data = {
        description: modalForm.description,
        status: modalForm.status,
        community: modalForm.community,
        announcement: modalForm.announcement,
        meet_up: {
            date: modalForm.meetUpDate || "",
            time: modalForm.meetUpTime || "",
            description: modalForm.meetUpDescription || "",
        },
        modified_on: Math.trunc((new Date().valueOf() / 1000))
    }
    const filteredData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != null));
    const db = firebaseInstance.firestore
    const docRef = doc(db, "reports", modalForm.id);

    await updateDoc(docRef, filteredData)

    return docRef
}

export {
    updateFirebaseReport
}