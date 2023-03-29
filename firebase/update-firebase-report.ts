import {doc, updateDoc} from "firebase/firestore";
import {firebaseInstance} from "./firebase-instance";

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