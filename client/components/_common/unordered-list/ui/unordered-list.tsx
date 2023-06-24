import React, {FC, ReactNode} from 'react';
import {UnorderedListStyled} from "./unordered-list.styled";

export interface UnorderedListProps {
    children?: ReactNode
    margin?: string
}

const UnorderedList: FC<UnorderedListProps> = ({
    children,
    margin
}) => {
    return (
        <UnorderedListStyled
            margin={margin}
        >
            {children}
        </UnorderedListStyled>
    );
};

export {UnorderedList};