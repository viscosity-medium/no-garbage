import React from 'react';
import dayjs from "dayjs";
import {StyledDatePicker} from "./custom-date-picker.styled";

const CustomDatePicker = ({
    onChangeHandler,
    value
}) => {

    const dateFormat = "DD-MM-YYYY";
    const editedValue = typeof(value) === "string" && value.length > 0 ? dayjs(value) : value;

    return (
        <StyledDatePicker
            onChange={onChangeHandler}
            format={dateFormat}
            value={editedValue}
        />
    );

};

export { CustomDatePicker };