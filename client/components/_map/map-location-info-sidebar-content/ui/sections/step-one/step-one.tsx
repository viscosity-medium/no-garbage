import React from 'react';
import LocationInputItem from "./location-input-item";

const StepOne = ({coordinatesString, locationName}) => {
    return (
        <>
            <LocationInputItem
                title={"Coordinates"}
                inputValue={coordinatesString}
                description={"Please check the coordinates for your pin and change if needed"}
            />
            <LocationInputItem
                title={"Location name"}
                inputValue={locationName}
                description={"Please choose the exact or nearest place"}
            />
        </>
    );
};

export {StepOne};