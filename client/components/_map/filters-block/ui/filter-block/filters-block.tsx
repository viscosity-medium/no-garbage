import React from 'react';
import FilterItem from "../filter-item/filter-item";
import {Div} from "../../../../_common/custom-image/ui/custom-div.styled";
import {useSwitchMapFilter} from "../../model/filter-block.hooks";
import {getDynamicInfo} from "../../../../_layout/layout/model/layout.selectors";
import {useDispatch, useSelector} from "react-redux";
import {createDynamicFiltersData} from "../../../../../map/model/map.helpers";
import {Button} from "../../../../_common/button";
import {Text} from "../../../../_common/text";
import {filterBlockActions} from "../../model/filters-block.slice";

const FiltersBlock = ({map}) => {

    const dispatch = useDispatch();
    const dynamicData = useSelector(getDynamicInfo)?.general_information;
    const filterInfo = createDynamicFiltersData({dynamicData});
    const onResetFiltersClick = () => {
        dispatch(filterBlockActions.setFormState("reset"));
    };

    useSwitchMapFilter({map});

    return (
        <>

            <Div
                position={"absolute"}
                width={"auto"}
                height={"auto"}
                top={"33px"}
                left={"28px"}
                zIndex={2}
                userSelect={"none"}
            >
                <Div
                    zIndex={2}
                    position={"relative"}
                    width={"240px"}
                    height={"auto"}
                    margin={"0 0 20px"}
                >
                    <Button
                        width={"240px"}
                        height={"47px"}
                        border={"1px solid #FE7962"}
                        borderRadius={"12px"}
                        backgroundColor={"rgba(255,176,132,0.96)"}
                        onClick={onResetFiltersClick}
                    >
                        <Text
                            tag={"span"}
                            weight={"400"}
                            color={"#fff"}
                        >
                            Reset all filters
                        </Text>
                    </Button>
                </Div>
                {
                    Object.entries(filterInfo).map(([filterName, filterOptions]) => (
                        <FilterItem
                            key={`filter-item-${filterName}`}
                            filterName={filterName}
                            filterOptions={filterOptions}
                        />
                    ))
                }
            </Div>
        </>
    );
};

export {FiltersBlock};