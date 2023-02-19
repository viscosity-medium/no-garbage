import {IStateSchema} from "../../../store/state-schema";

export const getAllFilters = (state: IStateSchema) => state.filterSwitcher.allFilters;
export const getFilterValue = (state: IStateSchema) => state.filterSwitcher.filter;
export const getOrderValue = (state: IStateSchema) => state.filterSwitcher.order;