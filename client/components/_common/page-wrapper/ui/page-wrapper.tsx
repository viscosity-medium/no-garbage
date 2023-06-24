import React, {FC} from 'react';
import {PageWrapperProps, PageWrapperStyled} from "./page-wrapper.styled";


const PageWrapper: FC<PageWrapperProps> = ({
    children,
    isAnimated,
    margin,
    backgroundColor
}) => {
    return (
        <PageWrapperStyled
            isAnimated={isAnimated}
            margin={margin}
            backgroundColor={backgroundColor}
        >
            {children}
        </PageWrapperStyled>
    );
};

export {PageWrapper};