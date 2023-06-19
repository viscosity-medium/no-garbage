import React, {useEffect} from 'react';
import FilterItem from "./filter-item/filter-item";
import {Div} from "../../_common/custom-image/custom-div.styled";
import {useSelector} from "react-redux";
import {getMapFilters} from "./filter-block.selectors";
import {filtersData, garbageTypes} from "../../../map/model/mapbox-configs";

const FiltersBlock = ({map}) => {

    const filters = useSelector(getMapFilters);

    useEffect(()=>{

        const activeLitterTypes = filters["Type of Litter"];

        if(activeLitterTypes.length > 0){

            garbageTypes.forEach(garbageType =>{
                map?.current?.setLayoutProperty(`${garbageType}-points`, "visibility", "none");
            });

            activeLitterTypes.forEach((activeLitterType)=>{
                map?.current?.setLayoutProperty(`${activeLitterType}-points`, "visibility", "visible");
            });

        } else if(activeLitterTypes.length === 0){

            garbageTypes.forEach(garbageType =>{
                map?.current?.setLayoutProperty(`${garbageType}-points`, "visibility", "visible");
            });

        }

    },[filters])

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