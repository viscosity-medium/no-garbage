import React from 'react';
import LocationInputItem from "./location-input-item";
import {Switch} from "../../../../../_common/switch";

const StepOne = ({coordinatesString, locationName}) => {

    const garbageTypes = ["Common waste", "Construction waste"]

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
            <Switch items={garbageTypes}/>
        </>
    );
};

export {StepOne};