import {StateSchema} from "../../../../store/state-schema";

export const getSearchBarValue = (state: StateSchema) => (state.moderationDataWindow.searchBarText);
export const getFirebaseReports = (state: StateSchema) => (state.moderationDataWindow.firebaseReports);
export const getLastVisibleDoc = (state: StateSchema) => (state.moderationDataWindow.lastVisibleDoc)