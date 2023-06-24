import DivWrapperStyled from "./custom-div.styled";
import React, {FC, ReactNode} from "react";

interface IBtnGroup {
    children?: ReactNode
    width?: string
    height?: string
    backgroundImage?: string
    clickHandler?: () => void
}

const CustomDiv: FC<IBtnGroup> = ({
    children,
    clickHandler,
    width = "100%",
    height = "100%",
    backgroundImage
}) => {
    return(
        <DivWrapperStyled
            onClick={clickHandler}
            width={width}
            height={height}
            backgroundImage={backgroundImage}
        >
            {children}
        </DivWrapperStyled>
    )
}

export { CustomDiv };