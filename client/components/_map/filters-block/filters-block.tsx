import React, {useEffect} from 'react';
import FilterItem from "./filter-item/filter-item";
import {Div} from "../../_common/custom-image/custom-div.styled";
import {filtersData} from "./filters-data/filters-data";
import {useDispatch, useSelector} from "react-redux";
import {getMapFilters} from "./filter-block-selectors";
import {filterBlockActions} from "./filters-block-slice";

const FiltersBlock = () => {
    return (
        <Div
            position={"absolute"}
            width={"auto"}
            height={"auto"}
            top={"33px"}
            left={"28px"}
            zIndex={2}
        >
            {
                Object.entries(filtersData).map(([filterName, filterOptions]) => (
                    <FilterItem
                        key={`filter-item-${filterName}`}
                        filterName={filterName}
                        filterOptions={filterOptions}
                    />
                ))
            }

        </Div>
    );
};

export default FiltersBlock;