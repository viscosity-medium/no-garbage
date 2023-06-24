import React, {FC, ReactNode} from 'react';
import {UnorderedListItemStyled} from "./unordered-list-item.styled";

interface UnorderedListProps {
    children: ReactNode
}

const UnorderedListItem: FC<UnorderedListProps> = ({children}) => {
    return (
        <UnorderedListItemStyled>
            {children}
        </UnorderedListItemStyled>
    );
};

export { UnorderedListItem };