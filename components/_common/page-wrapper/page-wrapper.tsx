import React, {FC} from 'react';
import {PageWrapperProps, PageWrapperStyled} from "./page-wrapper.styled";


const PageWrapper: FC<PageWrapperProps> = ({
    children,
    isAnimated,
    margin
}) => {
    return (
        <PageWrapperStyled
            isAnimated={isAnimated}
            margin={margin}
        >
            {children}
        </PageWrapperStyled>
    );
};

export default PageWrapper;