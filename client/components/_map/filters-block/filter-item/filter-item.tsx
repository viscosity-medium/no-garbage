import React, {useState} from 'react';
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import FilterButton from "./filter-button/filter-button";
import FilterFiller from "./filter-filler/filter-filler";
import colors from "../../../../styles/globals/colors";

const FilterItem = ({filterName, filterOptions}) => {

    const [visibility, setVisibility] = useState<boolean>(false);
    const optionPanelHeight = filterOptions.length * 40;

    const onButtonClick = () => {
        setVisibility(prevState => !prevState);
    }

    return (
        <VStack>
            <FilterButton
                filterName={filterName}
                visibility={visibility}
                onClick={onButtonClick}
            />
            <VStack
                align={"center"}
                justify={"space-between"}
                width={"240px"}
                height={visibility ? `${optionPanelHeight +20}px` : "0"}
                padding={visibility ? "10px 0" : "0"}
                margin={"4px 0"}
                background={colors.white}
                border={"2px solid #AFB1B6"}
                borderRadius={"8px"}
                overflow={"hidden"}
                transition={"0.5s"}
                opacity={visibility ? 1 : 0}
            >
                {filterOptions.map(fillerOption => (
                    <FilterFiller
                        key={`filter-filler-${filterName}-${fillerOption}`}
                        filterName={filterName}
                        fillerOption={fillerOption}
                    />))
                }
            </VStack>
        </VStack>
    );
};

export default FilterItem;