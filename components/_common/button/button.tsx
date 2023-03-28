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
    backgroundColorOnHover,
    backgroundImage,
    color = colors.lightBlack,
    width = '110px',
    height= '50px',
    margin,
    border,
    borderRadius ,
    size= "16px",
    lineHeight = 400,
    textDecoration,
    transition,
    disabled
}) => {

    const btnClasses = classes?.join(" ");

    return (
        <ButtonStyled
            position={position}
            disabled={disabled}
            className={`${btnClasses}`}
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            backgroundColorOnHover={backgroundColorOnHover}
            color={color}
            onClick={handleClick}
            width={width}
            height={height}
            left={left}
            right={right}
            bottom={bottom}
            top={top}
            margin={margin}
            border={`2px solid ${backgroundColor}`}
            borderRadius={borderRadius}
            size={size}
            lineHeight={lineHeight}
            textDecoration={textDecoration}
            transition={transition}
        >
            {buttonName ? buttonName : null}
            {children ? children : null}
        </ButtonStyled>
    );
};

export default Button;