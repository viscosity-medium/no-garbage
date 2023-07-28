import {StateSchema} from "../../../store/state-schema";

export const getMapPageUniqueId = (state: StateSchema) => state.mapPage.uniqueMapSessionId;