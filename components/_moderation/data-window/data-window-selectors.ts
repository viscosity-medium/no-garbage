import {IStateSchema} from "../../../store/state-schema";

export const getSearchBarValue = (state: IStateSchema) => (state.moderationDataWindow.searchBarText);
export const getFirebaseReports = (state: IStateSchema) => (state.moderationDataWindow.firebaseReports);
export const getLastVisibleDoc = (state: IStateSchema) => (state.moderationDataWindow.lastVisibleDoc)