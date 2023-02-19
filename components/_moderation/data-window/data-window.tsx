import React from 'react';
import {StyledSection} from "../../_main/promo-section/promo.styled";
import Text from "../../_common/text/text";
import VStack from "../../_common/flex-stack/v-stack/v-stack";
import DataSearchBar from "../data-search/data-search-bar";
import DataTable from "../data-table/data-table";
import FilterSwitcher from "../../_common/filter-switcher/filter-switcher";
import {useTranslation} from "next-i18next";
import DataWindowHeaders from "../data-window-headers/data-window-headers";
import PaginationPanel from "../pagination-panel/pagination-panel";
import {useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {getFilterValue, getOrderValue} from "../../_common/filter-switcher/filter-switch-selectors";
import {getPaginationQuantity} from "../pagination-panel/pagination-selectors";
import {getSearchBarValue} from "./data-window-selectors";
import {fetchFirebaseReports} from "./data-window-slice";
import {useDebounce} from "../../../hooks/use-debounce";

const DataWindow = () => {
    const { t } = useTranslation("moderation");
    const dispatch = useAppDispatch();
    const filter = useSelector(getFilterValue);
    const order = useSelector(getOrderValue);
    const paginationQuantity = useSelector(getPaginationQuantity);
    const searchBarValue = useSelector(getSearchBarValue);
    const getAsyncReports = async () => {
        await dispatch(fetchFirebaseReports({filter, order, paginationQuantity, searchBarValue}));
    }
    const dependencyArray = [filter, order, paginationQuantity, searchBarValue];

    useDebounce({
        callback: getAsyncReports,
        delay: 250,
        deps: dependencyArray
    });
    return (
        <StyledSection
            width={"100%"}
            padding={"40px 48px 34px"}
        >
            <VStack>
                <Text
                    tag={"h3"}
                    text={t("databaseTitle")}
                />
                <FilterSwitcher/>
                <DataSearchBar/>
                <DataWindowHeaders/>
                <DataTable/>
                <PaginationPanel/>
            </VStack>
        </StyledSection>
    );
};

export default DataWindow;