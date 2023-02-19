import React, {CSSProperties, FC} from 'react';
import {ButtonStyled, IButton} from "./button.styled";
import colors from "../../../styles/globals/colors";

const Button: FC<IButton> = ({
    children,
    position = "relative",
    handleClick,
    left,
    right,
    bottom,
    top,
    buttonName,
    classes,
    backgroundColor= colors.invisible,
    backgroundImage,
    color = colors.black,
    width = '340px',
    height= '54px',
    margin,
    borderRadius = "8px",
    size= "16px",
    lineHeight = 400,
    textDecoration
}) => {
    const btnClasses = classes?.join(" ")
    return (
        <ButtonStyled
            position={position}
            className={`${btnClasses}`}
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            color={color}
            onClick={handleClick}
            width={width}
            height={height}
            left={left}
            right={right}
            bottom={bottom}
            top={top}
            margin={margin}
            borderRadius={borderRadius}
            size={size}
            lineHeight={lineHeight}
            textDecoration={textDecoration}
        >
            {buttonName ? buttonName : null}
            {children ? children : null}
        </ButtonStyled>
    );
};

export default Button;