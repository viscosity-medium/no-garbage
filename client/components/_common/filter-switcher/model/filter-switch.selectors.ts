import {StateSchema} from "../../../../store/state-schema";

export const getAllFilters = (state: StateSchema) => state.filterSwitcher.allFilters;
export const getFilterValue = (state: StateSchema) => state.filterSwitcher.filter;
export const getOrderValue = (state: StateSchema) => state.filterSwitcher.order;