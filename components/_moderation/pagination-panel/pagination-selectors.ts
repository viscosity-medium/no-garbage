import {IStateSchema} from "../../../store/state-schema";

export const getPaginationQuantity = (state: IStateSchema) => state.moderationPagination.paginationQuantity;
export const getCurrentPage = (state: IStateSchema) => state.moderationPagination.currentPage