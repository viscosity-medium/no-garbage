import {doc, updateDoc} from "firebase/firestore";
import {firebaseInstance} from "./firebase-instance";
import {createModalFormDataModelAsCollectionInFirebase, getOnlyEditedValuesFromModalFormData} from "./firebase.helpers";

const updateFirebaseReport = async ({modalForm}) => {

    const unsortedModalFormData = createModalFormDataModelAsCollectionInFirebase({modalForm});
    const editedDataNeededToUpdate = getOnlyEditedValuesFromModalFormData({unsortedModalFormData});
    const db = firebaseInstance.firestore;
    const docRef = doc(db, "reports", modalForm.id);

    await updateDoc(docRef, editedDataNeededToUpdate);

    return docRef;

}

export {
    updateFirebaseReport
}