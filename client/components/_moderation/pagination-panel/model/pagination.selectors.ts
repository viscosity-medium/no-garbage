import {StateSchema} from "../../../../store/state-schema";

export const getPaginationQuantity = (state: StateSchema) => state.moderationPagination.paginationQuantity;
export const getCurrentPage = (state: StateSchema) => state.moderationPagination.currentPage;
export const getPaginationDirection = (state: StateSchema) => state.moderationPagination.paginationDirection;