import {StateSchema} from "../../../../store/state-schema";

export const getLanguage = (state: StateSchema) => (state.navbar.language);