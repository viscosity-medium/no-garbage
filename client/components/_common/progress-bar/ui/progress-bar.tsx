import React, {FC} from 'react';
import {Div} from "../../custom-image/ui/custom-div.styled";
import colors from "../../../../styles/globals/colors";
import {CompleteBar} from "./complete-bar";

interface ProgressBarProps {
    progressBar: number
}

const ProgressBar: FC<ProgressBarProps> = ({progressBar}) => {

    const backgroundColor = progressBar !== 100 ? colors.mapDragAndDropColor : colors.pastelGreen

    return (
        <Div
            position={"relative"}
            zIndex={1}
            width={"100%"}
            height={"10px"}
        >
            <Div
                position={"relative"}
                zIndex={1}
                width={`${progressBar}%`}
                height={"10px"}
                backgroundColor={backgroundColor}
                borderRadius={"50px"}
            >
                {
                    progressBar === 100 ?
                        <CompleteBar backgroundColor={backgroundColor}/> :
                        <></>
                }
            </Div>
        </Div>
    );
};

export { ProgressBar };