import {StateSchema} from "../../../../store/state-schema";

export const getMapFilters = (state: StateSchema) => state.filterBlock.mapFilters;
export const getFiltersFormState = (state: StateSchema) => state.filterBlock.formState;