import React from 'react';
import FilterItem from "./filter-item/filter-item";
import {Div} from "../../_common/custom-image/custom-div.styled";
import {filtersData} from "../../../map/model/mapbox-configs";
import {useSwitchMapFilter} from "./filter-block.hooks";

const FiltersBlock = ({map}) => {

    useSwitchMapFilter({map});

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
                        map={map}
                    />
                ))
            }
        </Div>
    );
};

export default FiltersBlock;