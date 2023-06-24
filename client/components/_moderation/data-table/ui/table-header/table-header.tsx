import {FC, ReactNode} from 'react';
import {StyledTableHeader} from "./table-header.styled";

interface TableHeaderProps {
    children: ReactNode
    width?: string
}

const TableHeader: FC<TableHeaderProps> = ({
    children,
    width,
}) => {


    return (
        <StyledTableHeader
            position={"sticky"}
            width={width}
            top={0}
            zIndex={10}
        >
            {
                children
            }
        </StyledTableHeader>
    );
};

export { TableHeader };