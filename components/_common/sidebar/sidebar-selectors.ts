import {IStateSchema} from "../../../store/state-schema";

export const getSidebarState = (state: IStateSchema) => state.sidebar.isOpened;