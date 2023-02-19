import {IStateSchema} from "../../../store/state-schema";

export const getLanguage = (state: IStateSchema) => (state.navbar.language);