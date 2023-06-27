import React from 'react';
import {LocationInputItem} from "./location-input-item";
import {Switch} from "../../../../../_common/switch";
import {wasteTypes} from "../../../../../../map/model/mapbox-configs";

const StepOne = ({coordinatesString, locationName}) => {

    return (
        <>
            <LocationInputItem
                title={"Coordinates"}
                inputValue={coordinatesString}
                description={"Please check the coordinates for your pin and change another location if needed"}
            />
            <LocationInputItem
                title={"Location name"}
                inputValue={locationName}
                description={"Please choose the exact or nearest place"}
            />
            <Switch items={wasteTypes}/>
        </>
    );
};

export { StepOne };