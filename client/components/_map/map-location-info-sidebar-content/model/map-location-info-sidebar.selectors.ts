import {StateSchema} from "../../../../store/state-schema";

export const getLocationInfoSidebarVisibility = (state: StateSchema) => state.locationInfoSidebar.modalVisibility;
export const getUserMarkerProperties = (state: StateSchema) => state.locationInfoSidebar.userMarkerProperties;
export const getSubmitButtonState = (state: StateSchema) => state.locationInfoSidebar.submitButtonState;
export const getFilesToUpload = (state: StateSchema) => state.locationInfoSidebar.filesToUpload;
export const getDropboxProperties = (state: StateSchema) => state.locationInfoSidebar.dropboxProperties;
export const getTextAreaContent = (state: StateSchema) => state.locationInfoSidebar.textAreaContent;
export const getDataStatus = (state: StateSchema) => state.locationInfoSidebar.dataStatus;
export const getWasteType = (state: StateSchema) => state.locationInfoSidebar.wasteType;
