import {StateSchema} from "../../../../store/state-schema";

export const getSearchBarValue = (state: StateSchema) => (state.moderationDataWindow.searchBarText);
export const getFirebaseReports = (state: StateSchema) => (state.moderationDataWindow.firebaseReports);
export const getLastVisibleDoc = (state: StateSchema) => (state.moderationDataWindow.lastVisibleDoc)
export const getFirstVisibleDoc = (state: StateSchema) => (state.moderationDataWindow.firstVisibleDoc)
export const getReportsCount = (state: StateSchema) => (state.moderationDataWindow.reportsCount)