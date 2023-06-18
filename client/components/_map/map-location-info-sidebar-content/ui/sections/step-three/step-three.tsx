import React from 'react';
import TextArea from "../../../../../_common/text-area/text-area";
import {useAppDispatch} from "../../../../../../store/store";
import {locationInfoSidebarActions} from "../../../model/map-location-info-sidebar.slice";
import {useSelector} from "react-redux";
import {getTextAreaContent} from "../../../model/map-location-info-sidebar.selectors";

const StepThree = ({}) => {

    const textAreaValue = useSelector(getTextAreaContent);
    const dispatch = useAppDispatch();
    const onChangeHandler = (e) => {
        dispatch(locationInfoSidebarActions.setTextAreaContent(e.target.value))
    };

    return (
        <TextArea
            height={"auto"}
            placeholderText={"Type additional description if it helps to define the location."}
            placeholderFontSize={"14px"}
            onChangeHandler={(e) => onChangeHandler(e)}
            textAreaValue={textAreaValue}
        />
    );

};

export {
    StepThree
};