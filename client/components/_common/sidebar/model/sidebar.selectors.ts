import {StateSchema} from "../../../../store/state-schema";

export const getSidebarState = (state: StateSchema) => state.sidebar.isOpened;