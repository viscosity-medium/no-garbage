import React, {useEffect, useState} from 'react';
import {CustomDiv} from "../../custom-div";
import {CustomLabel} from "../../custom-label";
import {CustomCheckboxInput} from "../../custom-checkbox-input/";
import {batch, useDispatch, useSelector} from "react-redux";
import {getFiltersFormState, getMapFilters} from "../../../_map/filters-block/model/filter-block.selectors";
import {filterBlockActions} from "../../../_map/filters-block/model/filters-block.slice";

const CustomCheckbox = ({id, filterName, fillerOption, reference}: {
    id: string,
    filterName: string
    fillerOption: any,
    reference?: any
}) => {

    const dispatch = useDispatch();
    const mapFilters = useSelector(getMapFilters);
    const formState = useSelector(getFiltersFormState);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onCheckboxChange = () => {

        const editedProperty = JSON.parse(JSON.stringify(mapFilters?.[filterName]));
        const indexOf = mapFilters?.[filterName].indexOf(fillerOption);
        indexOf > -1  ? editedProperty.splice(indexOf, 1) : "";

        dispatch(filterBlockActions.setFormState("filled"));
        dispatch(filterBlockActions.setMapFilters({
            ...mapFilters,
            [filterName]: (!isChecked ? [
                ...mapFilters?.[filterName],
                fillerOption
            ] : editedProperty)
        }));
        setIsChecked(!isChecked);

    };

    useEffect(() => {

        if( formState === "reset" ){

            batch( () => {
                dispatch(filterBlockActions.setMapFilters({
                    "Communities": [],
                    "Status of location": [],
                    "Type of Litter": []
                }));
                setIsChecked(false);
            });

        }

    },[formState]);

    return (
        <CustomDiv
            width={"20px"}
            height={"20px"}
        >
            <CustomCheckboxInput
                id={id}
                reference={reference}
                checked={isChecked}
                onChange={onCheckboxChange}
            />
            <CustomLabel
                id={id}
            />
        </CustomDiv>
    );

};

export { CustomCheckbox };