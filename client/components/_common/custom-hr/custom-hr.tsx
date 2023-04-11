import React, {FC} from 'react';
import StyledHr, {IHr} from "./custom-hr.styled";

const CustomHr: FC<IHr> = ({
    width,
    height,
    backgroundColor,
    margin,
    opacity
}) => {
    return (
        <StyledHr
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            margin={margin}
            opacity={opacity}
        />
    );
};

export default CustomHr;