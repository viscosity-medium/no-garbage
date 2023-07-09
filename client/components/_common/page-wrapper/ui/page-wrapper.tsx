import React, {FC} from 'react';
import {PageWrapperProps, PageWrapperStyled} from "./page-wrapper.styled";


const PageWrapper: FC<PageWrapperProps> = ({
    children,
    isAnimated,
    margin,
    backgroundColor,
    opacity
}) => {
    return (
        <PageWrapperStyled
            isAnimated={isAnimated}
            margin={margin}
            backgroundColor={backgroundColor}
            opacity={opacity}
        >
            {children}
        </PageWrapperStyled>
    );
};

export {PageWrapper};