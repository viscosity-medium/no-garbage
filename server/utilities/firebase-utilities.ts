import {CreateModalFormDataModel, SortedModalForm} from "../types/firebase-types";

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
            waste_type: modalForm.wasteType
        },
        type: "Feature"
    }
)

export const getOnlyEditedValuesFromModalFormData: SortedModalForm = ({unsortedModalFormData}) => (
    Object.fromEntries(Object.entries(unsortedModalFormData).filter(([_, value]) => value != null))
);