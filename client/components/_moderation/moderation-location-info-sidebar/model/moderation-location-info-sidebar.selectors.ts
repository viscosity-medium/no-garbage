import {StateSchema} from "../../../../store/state-schema";

export const getModalVisibility = (state: StateSchema) => state.moderationLocationInfoSidebarSlice.modalVisibility;
export const getModalContent = (state: StateSchema) => state.moderationLocationInfoSidebarSlice.modalContent;
export const getChosenPhoto = (state: StateSchema) => state.moderationLocationInfoSidebarSlice.chosenPhoto;
export const getSaveButtonState = (state: StateSchema) => state.moderationLocationInfoSidebarSlice.saveButtonState;