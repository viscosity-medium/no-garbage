import {StateSchema} from "../../../../store/state-schema";

export const getModalVisibility = (state: StateSchema) => state.modal.modalVisibility;
export const getModalContent = (state: StateSchema) => state.modal.modalContent;
export const getChosenPhoto = (state: StateSchema) => state.modal.chosenPhoto;
export const getSaveButtonState = (state: StateSchema) => state.modal.saveButtonState;