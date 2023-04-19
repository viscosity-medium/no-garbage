
interface ModalFormDataModel {
    description: string,
    status: string,
    community: string,
    announcement: string,
    meet_up: {
        date: string,
        time: string,
        description: string,
    },
    modified_on: number
}

type CreateModalFormDataModel = ({modalForm}) => ModalFormDataModel

type SortedModalForm = (ModalFormDataModel) => {[key: string]: any}

const createModalFormDataModelAsCollectionInFirebase: CreateModalFormDataModel = ({modalForm}) => (
    {
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
)

const getOnlyEditedValuesFromModalFormData: SortedModalForm = ({unsortedModalFormData}) => (
    Object.fromEntries(Object.entries(unsortedModalFormData).filter(([_, value]) => value != null))
);

export {
    createModalFormDataModelAsCollectionInFirebase,
    getOnlyEditedValuesFromModalFormData
}