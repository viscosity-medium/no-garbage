import {filterSwitcherActions} from "./filter-switch.slice";
import {filterOrderOptions} from "./filter-options";

export type FilterArgument1 = "created_on" | "status" | "community";
export type FilterArgument2 = "Date Added" | "Status" | "Community";

export const convertFirebaseValueToInterface = (arg: FilterArgument1) => {
    switch (arg){
        case "created_on":
            return "Date Added";
        case "status":
            return "Status";
        case "community":
            return "Community";
    }
};

export const convertInterfaceValueToFirebase = (arg: FilterArgument2) => {
    switch (arg){
        case "Date Added":
            return "created_on";
        case "Status":
            return "status";
        case "Community":
            return "community";
    }
};

export const switchFilterProperty = ({arg, setFilter}) => {
    const fireBaseFilter = convertInterfaceValueToFirebase(arg);
    setFilter(fireBaseFilter);
};

export const switchFilterOrder = ({
    dispatch, value
}) => {
    switch (value){
        case "Asc":
            dispatch(filterSwitcherActions.setCurrentOrder("asc"));
            break;
        case "Desc":
            dispatch(filterSwitcherActions.setCurrentOrder("desc"));
            break;
    }
};

export const getCapitalizedOrder = ({order}) => {
    return filterOrderOptions.reduce((accum, current)=>{
        switch (order){
            case current.toLowerCase():
                return current
            default:
                return accum
        }
    },"")
}