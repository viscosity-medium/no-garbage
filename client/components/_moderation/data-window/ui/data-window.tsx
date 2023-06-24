import {StyledSection} from "../../../_main/promo-section/ui/promo-section/promo.styled";
import {Text} from "../../../_common/text";
import {DataTable} from "../../data-table/ui/data-table/data-table";
import {FilterSwitcher} from "../../../_common/filter-switcher";
import {useTranslation} from "next-i18next";
import PaginationPanel from "../../pagination-panel/pagination-panel";
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {getFilterValue, getOrderValue} from "../../../_common/filter-switcher/model/filter-switch.selectors";
import {getPaginationQuantity} from "../../pagination-panel/pagination.selectors";
import {getSearchBarValue} from "../model/data-window.selectors";
import {fetchFirebaseReports, moderationDataWindowActions} from "../model/data-window.slice";
import {useDebounce} from "../../../../hooks/use-debounce";
import {HStack, VStack} from "../../../_common/flex-stack";
import {DataSearchInput} from "./data-search-bar.styled";
import React, {useCallback} from "react";
import {useDefineSidebarSizes} from "../../../../hooks/use-define-sidebar-sizes";
import useWindowDimensions from "../../../../hooks/use-window-dimensions";

const DataWindow = () => {

    const { t } = useTranslation("moderation");
    const dispatch = useAppDispatch();
    const filter = useSelector(getFilterValue);
    const order = useSelector(getOrderValue);
    const paginationQuantity = useSelector(getPaginationQuantity);
    const searchBarValue = useSelector(getSearchBarValue);

    const dataSearchInputHandler = (e: any) => {
        if(e?.target){
            dispatch(moderationDataWindowActions.setSearchBarText(e.target.value));
        }
    };

    const getAsyncReports = useCallback(
        async () => {
            await dispatch(fetchFirebaseReports({filter, order, paginationQuantity, searchBarValue}));
    }, [filter, order, paginationQuantity, searchBarValue]);

    const dependencyArray = [filter, order, paginationQuantity, searchBarValue];

    const { windowHeight, document, bodyHeight } = useWindowDimensions();
    const { calculatedHeight } = useDefineSidebarSizes({
        sidebarWidth: [0],
        windowHeight, document, bodyHeight
    });

    useDebounce({
        callback: getAsyncReports,
        delay: 250,
        deps: dependencyArray
    });

    return (
        <StyledSection
            width={"100%"}
            height={calculatedHeight}
        >
            <VStack
                height={"100%"}
            >
                <HStack
                    height={"94px"}
                    padding={"0 24px 0 24px"}
                    align={"center"}
                    justify={"space-between"}
                >
                    <HStack
                        align={"center"}
                    >
                        <Text
                            tag={"h3"}
                            size={"24px"}
                        >{t("databaseTitle")}</Text>
                        <DataSearchInput
                            placeholder={"Search..."}
                            onChange={dataSearchInputHandler}
                            type={"text"}
                            value={searchBarValue}
                        />
                    </HStack>
                    <FilterSwitcher/>
                </HStack>
                <VStack
                    position={"relative"}
                    padding={"0 20px"}
                    height={"100%"}
                    justify={"end"}
                >
                    <DataTable/>
                    <PaginationPanel/>
                </VStack>
            </VStack>
        </StyledSection>
    );
};

export { DataWindow };