import {TextArea} from "../../../../../_common/text-area";
import {useAppDispatch} from "../../../../../../store/store";
import {locationInfoSidebarActions} from "../../../model/map-location-info-sidebar.slice";
import {useSelector} from "react-redux";
import {getTextAreaContent} from "../../../model/map-location-info-sidebar.selectors";
import {useEffect, useRef} from "react";
import {useResizeTextArea} from "../../../../../_common/text-area/model/text-area.hooks";

const StepThree = ({}) => {

    const descriptionTextAreaRef = useRef<any>(null);
    const textAreaValue = useSelector(getTextAreaContent);
    const textAreaLength = textAreaValue.length;
    const dispatch = useAppDispatch();
    const onChangeHandler = (e) => {
        dispatch(locationInfoSidebarActions.setTextAreaContent(e.target.value))
    };

    const resizeParameters = [
        {
            reference: descriptionTextAreaRef,
            contentLength: textAreaLength
        },
    ];

    useResizeTextArea({ resizeParameters });


    return (
        <TextArea
            reference={descriptionTextAreaRef}
            height={"auto"}
            placeholderText={"Type additional description if it helps to define the location."}
            placeholderFontSize={"14px"}
            onChangeHandler={(e) => onChangeHandler(e)}
            textAreaValue={textAreaValue}
            border={`1px solid rgba(0,0,0,0.3)`}
            borderRadius={"5px"}
            outline={"none"}
            color={"rgba(0,0,0,0.4)"}
        />
    );

};

export { StepThree };