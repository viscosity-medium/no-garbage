import React, {FC} from 'react';
import {Text} from "../../../../_common/text";

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
        <Text
            display={display}
            textAlign={textAlign}
            tag={"span"}
            text={text || "————"}
            size={"14px"}
            margin={margin}
        />
    );
};

export default TableCellContentWrapper;