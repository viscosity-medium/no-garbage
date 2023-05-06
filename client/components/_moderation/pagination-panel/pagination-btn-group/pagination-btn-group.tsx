import React from 'react';
import HStack from "../../../_common/flex-stack/h-stack/h-stack";
import Button from "../../../_common/button/button";
import colors from "../../../../styles/globals/colors";
import Text from "../../../_common/text/text";
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import {useDispatch, useSelector} from "react-redux";
import {paginationActions} from "../pagination.slice";
import {getCurrentPage} from "../pagination.selectors";

const PaginationBtnGroup = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const onClickPrevPage = () => {
        if(currentPage > 1){
            dispatch(paginationActions.setCurrentPage(currentPage - 1));
        }
    }

    const onClickNextPage = () => {
        dispatch(paginationActions.setCurrentPage(currentPage + 1))};
    return(
        <HStack
            justify={"space-between"}
            width={"192px"}
            height={"100%"}
        >
            <Button
                onClick={onClickPrevPage}
                width={"60px"}
                height={"100%"}
                buttonName={"<"}
                size={"20px"}
                backgroundColor={colors.lightGrey}
            />
            <VStack
                position={"relative"}
                justify={"center"}
                align={"center"}
                width={"50px"}
                height={"100%"}
                borderRadius={"8px"}
                background={colors.lightGrey}
             >
                <Text
                    tag={"span"}
                    text={`${currentPage}`}
                />
            </VStack>
            <Button
                onClick={onClickNextPage}
                width={"60px"}
                height={"100%"}
                buttonName={">"}
                size={"20px"}
                backgroundColor={colors.lightGrey}
            />
        </HStack>
    )
};

export default PaginationBtnGroup;