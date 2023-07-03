import {CreateModalFormDataModel, SortedModalForm} from "../types/firebase-types";
import {DocumentData, getCountFromServer, getDocs, limit, orderBy, query} from "firebase/firestore";
import {firebaseInstance} from "../firebase/firebase-instance";

export const createFirebaseReportDoc: CreateModalFormDataModel = ({modalForm}) => (
    {
        description: modalForm.description,
        full_description: modalForm.fullDescription,
        status: modalForm.status,
        community: modalForm.community,
        waste_type: modalForm.wasteType,
        announcement: modalForm.announcement,
        location: modalForm.location,
        meet_up: {
            date: modalForm.meetUpDate || "",
            time: modalForm.meetUpTime || "",
            description: modalForm.meetUpDescription || "",
        },
        modified_on: Math.trunc((new Date().valueOf() / 1000)),
        photos: modalForm.photos,
        videos: modalForm.videos
    }
)

export const createFireBaseGeoJsonDoc = ({modalForm}) => (
    {
        geometry: {
            coordinates: modalForm.location,
            type: "Point"
        },
        properties: {
            description: modalForm.fullDescription,
            status: modalForm.status,
            title: modalForm.description,
            waste_type: modalForm.wasteType,
            community: modalForm.community
        },
        type: "Feature"
    }
)

export const getSpecificFirebaseDoc = async ({
    filter, order,
    paginationQuantity,
}) => {

    const querySnapshot = await getDocs(
        query(
            firebaseInstance.reportsRef!,
            orderBy(filter, order),
            limit(+paginationQuantity),
        )
    );

    const firebaseReports: DocumentData[] = querySnapshot.docs.map((doc) => (
        doc.data()
    ));

    const totalDocsCount = (await getCountFromServer(firebaseInstance.reportsRef!)
        .then(
            data => data.data().count
        )
    );

    const firstVisibleDoc = querySnapshot.docs[0];
    const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length-1];

};

export const getAllFirebaseDocs = async ({filter, order}) => {

    const querySnapshot = await getDocs(
        query(
            firebaseInstance.reportsRef!,
            orderBy(filter, order),
        )
    );

    const firebaseReports: DocumentData[] = querySnapshot.docs.map((doc) => (
        doc.data()
    ));

    return firebaseReports
};

export const compareArrayOfObjectsByFilter = ({ firebaseDocs, order, filter }:{firebaseDocs:  DocumentData[], order: string, filter: string}) => {

    const compare = ({ a, b, }: {a:DocumentData, b: DocumentData}) => {

        if(order === "asc"){
            if ( a?.[filter] < b?.[filter] ){
                return -1;
            }
            if ( a?.[filter] > b?.[filter] ){
                return 1;
            }
            return 0;
        } else {
            if ( a?.[filter] < b?.[filter] ){
                return -1;
            }
            if ( a?.[filter] > b?.[filter] ){
                return 1;
            }
            return 0;
        }

    };

    return firebaseDocs.sort(compare as any);

}

export const findObjectsWithMatchedDescription = ({ firebaseDocs, searchBarValue }: {firebaseDocs:  DocumentData[], searchBarValue: string}) => {

    return firebaseDocs.filter(doc => (
        doc?.description?.toLowerCase().startsWith(searchBarValue.toLowerCase())
    ));

}

export const getOnlyEditedValuesFromModalFormData: SortedModalForm = ({unsortedModalFormData}) => (
    Object.fromEntries(Object.entries(unsortedModalFormData).filter(([_, value]) => value != null))
);