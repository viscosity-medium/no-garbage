import {IStateSchema} from "../../../store/state-schema";
import {wasteBlockReducer as wasteBlock} from "./waste-block-slice";

export const getChosenWasteType = (state: IStateSchema) => state.wasteBlock.chosenWasteType