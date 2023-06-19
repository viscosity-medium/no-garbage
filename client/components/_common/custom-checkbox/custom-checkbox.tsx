import React, {useState} from 'react';
import CustomDiv from "../custom-div/custom-div";
import CustomLabel from "../custom-label/custom-label";
import CustomCheckboxInput from "../custom-checkbox-input/custom-checkbox-input";
import {useDispatch, useSelector} from "react-redux";
import {getMapFilters} from "../../_map/filters-block/filter-block.selectors";
import {filterBlockActions} from "../../_map/filters-block/filters-block.slice";

const CustomCheckbox = ({id, filterName, fillerOption, map}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const dispatch = useDispatch();
    const mapFilters = useSelector(getMapFilters);

    const onCheckboxChange = () => {

        const editedProperty = JSON.parse(JSON.stringify(mapFilters?.[filterName]));
        const indexOf = mapFilters?.[filterName].indexOf(fillerOption);
        indexOf > -1  ? editedProperty.splice(indexOf, 1) : "";

        dispatch(filterBlockActions.setMapFilters({
            ...mapFilters,
            [filterName]: (!isChecked ? [
                ...mapFilters?.[filterName],
                fillerOption
            ] : editedProperty)
        }));
        setIsChecked(!isChecked);
    };

    return (
        <CustomDiv
            width={"20px"}
            height={"20px"}
        >
            <CustomCheckboxInput
                id={id}
                checked={isChecked}
                onChange={onCheckboxChange}
            />
            <CustomLabel id={id}/>
        </CustomDiv>
    );
};

export default CustomCheckbox;