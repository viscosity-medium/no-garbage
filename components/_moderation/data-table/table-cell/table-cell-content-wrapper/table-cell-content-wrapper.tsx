import React, {FC} from 'react';
import {Div} from "../../../../_common/custom-image/custom-div.styled";
import colors from "../../../../../styles/globals/colors";
import Text from "../../../../_common/text/text";

interface ITableCellContentWrapper {
    text?: string
    display?: string
    textAlign?: string
}
const TableCellContentWrapper: FC<ITableCellContentWrapper> = ({text, display, textAlign}) => {
    const definedColor = text === "clean" ? colors.clean :
        text === "moderation" ? colors.moderation :
        text === "scheduled" ? colors.scheduled :
        text === "rejected" ? colors.rejected :
        text === "dirty" ? colors.dirty : ""
    return (
        <Div
            position={"relative"}
            zIndex={2}
            width={"auto"}
            height={"auto"}
            padding={definedColor ? "2px 7px" : ""}
            background={definedColor}
            borderRadius={definedColor ? "5px" : ""}
        >
            <Text
                display={display}
                textAlign={textAlign}
                tag={"span"}
                text={text || ""}
                size={"14px"}
            />
        </Div>
    );
};

export default TableCellContentWrapper;