import React from 'react';
import CustomSelect from "../custom-select/custom-select";
import {useSelector} from "react-redux";
import {getFilterValue, getOrderValue} from "./filter-switch-selectors";
import {useTranslation} from "next-i18next";
import {filterSwitcherActions} from "./filter-switcher-slice";
import {useAppDispatch} from "../../../store/store";

const FilterSwitcher = () => {
    const dispatch = useAppDispatch();
    const order = useSelector(getOrderValue);
    const filter = useSelector(getFilterValue);
    const setFilter = (arg) => dispatch(filterSwitcherActions.setCurrentFilter(arg))
    const { t } = useTranslation("moderation")

    const additionalAction = (value) => {
        if(value == filter){
            order === "asc" ?
            dispatch(filterSwitcherActions.setCurrentOrder("desc")) :
            dispatch(filterSwitcherActions.setCurrentOrder("asc"))
        } else {
            dispatch(filterSwitcherActions.setCurrentOrder("asc"))
        }
    }
    return (
        <CustomSelect
            selectedProperty={filter}
            setSelectedProperty={setFilter}
            additionalAction={additionalAction}
            clear
            types={{
                created_on: t("dateShort"),
                status: t("status"),
                description:  t("description"),
            }}
        />
    );
};

export default FilterSwitcher;