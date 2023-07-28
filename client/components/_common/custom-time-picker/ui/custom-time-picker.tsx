import React from 'react';
import {StyledTimePicker} from "./custom-time-picker.styled";
import dayjs from "dayjs";

const CustomTimePicker = ({onChangeHandler, value}) => {

    const timeFormat = "HH:mm";
    const editedValue = typeof(value) === "string" && value.length > 0 ? dayjs(value) : value;

    return (
        <StyledTimePicker
            onChange={onChangeHandler}
            format={timeFormat}
            value={editedValue}
        />
    );
};

export {CustomTimePicker};