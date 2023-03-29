import React, {FC} from 'react';
import {Div} from "../../../../_common/custom-image/custom-div.styled";
import colors from "../../../../../styles/globals/colors";
import Text from "../../../../_common/text/text";

interface ITableCellContentWrapper {
    text?: string
    display?: string
    textAlign?: string
    margin?: string
    padding?: string
    backgroundColor?: string
}
const TableCellContentWrapper: FC<ITableCellContentWrapper> = ({
    text,
    display,
    textAlign,
    margin,
    padding,
    backgroundColor
}) => {

    return (
        <Div
            position={"relative"}
            zIndex={2}
            width={"max-content"}
            height={"auto"}
            padding={padding}
            borderRadius={"8px"}
            background={backgroundColor}
        >
            <Text
                display={display}
                textAlign={textAlign}
                tag={"span"}
                text={text || "————"}
                size={"14px"}
                margin={margin}
            />
        </Div>
    );
};

export default TableCellContentWrapper;