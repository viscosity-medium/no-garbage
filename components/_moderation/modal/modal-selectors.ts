import {IStateSchema} from "../../../store/state-schema";

export const getModalVisibility = (state: IStateSchema) => state.modal.modalVisibility;
export const getModalContent = (state: IStateSchema) => state.modal.modalContent;
export const getChosenPhoto = (state: IStateSchema) => state.modal.chosenPhoto;