import React, {useMemo} from 'react';
import {HStack, VStack} from "../../../../_common/flex-stack";
import {Button} from "../../../../_common/button";
import colors from "../../../../../styles/globals/colors";
import {Text} from "../../../../_common/text";
import {batch, useDispatch, useSelector} from "react-redux";
import {paginationActions} from "../../model/pagination.slice";
import {getCurrentPage, getPaginationQuantity} from "../../model/pagination.selectors";
import {getReportsCount} from "../../../data-window/model/data-window.selectors";
import {onClickNextPage, onClickPrevPage} from "../../model/pagination.helpers";

const PaginationBtnGroup = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const reportsCount = useSelector(getReportsCount) || 1;
    const pagesCount = useSelector(getPaginationQuantity) || 1;
    const totalPages = Math.ceil(reportsCount / +pagesCount);

    const props = {
        dispatch,
        totalPages,
        currentPage
    };

    return(
        <HStack
            justify={"space-between"}
            width={"auto"}
            height={"100%"}
        >
            <Button
                onClick={() => onClickPrevPage(props)}
                width={"60px"}
                height={"100%"}
                buttonName={"<"}
                size={"20px"}
                borderRadius={"8px"}
                backgroundColor={colors.lightGrey}
            />
            <VStack
                position={"relative"}
                justify={"center"}
                align={"center"}
                width={"auto"}
                minWidth={"60px"}
                height={"100%"}
                margin={"0 10px"}
                padding={"10px"}
                borderRadius={"8px"}
                background={colors.lightGrey}
             >
                <Text
                    tag={"span"}
                    text={`${currentPage}/${totalPages}`}
                />
            </VStack>
            <Button
                onClick={() => onClickNextPage(props)}
                width={"60px"}
                height={"100%"}
                buttonName={">"}
                size={"20px"}
                borderRadius={"8px"}
                backgroundColor={colors.lightGrey}
            />
        </HStack>
    )
};

export default PaginationBtnGroup;