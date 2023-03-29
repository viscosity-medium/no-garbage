import React from 'react';
import HStack from "../../_common/flex-stack/h-stack/h-stack";
import PaginationBtnGroup from "./pagination-btn-group/pagination-btn-group";
import PaginationQuantityController from "./pagination-quantity-controller/pagination-quantity-controller";
import {HorizontalDropdownMenu} from "../../_common/dropdown-menu/horizontal-dropdown-menu/horizontal-dropdown-menu";

const PaginationPanel = () => {
    return (
        <HStack
            width={"100%"}
            height={"50px"}
            margin={"20px 0"}
            align={"center"}
            justify={"space-between"}
        >
            <PaginationQuantityController/>
            <PaginationBtnGroup/>
        </HStack>
    );
};

export default PaginationPanel;