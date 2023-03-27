import {StyledSection} from "../../_main/promo-section/ui/promo-section/promo.styled";
import Text from "../../_common/text/text";
import VStack from "../../_common/flex-stack/v-stack/v-stack";
import DataTable from "../data-table/data-table";
import FilterSwitcher from "../../_common/filter-switcher/filter-switcher";
import {useTranslation} from "next-i18next";
import PaginationPanel from "../pagination-panel/pagination-panel";
import {useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {getFilterValue, getOrderValue} from "../../_common/filter-switcher/filter-switch-selectors";
import {getPaginationQuantity} from "../pagination-panel/pagination-selectors";
import {getSearchBarValue} from "./data-window-selectors";
import {fetchFirebaseReports, moderationDataWindowActions} from "./data-window-slice";
import {useDebounce} from "../../../hooks/use-debounce";
import HStack from "../../_common/flex-stack/h-stack/h-stack";
import {DataSearchInput} from "../data-search/data-search-bar.styled";
import React from "react";
import {useDefineSidebarSizes} from "../../../hooks/use-define-sidebar-sizes";
import useWindowDimensions from "../../../hooks/use-window-dimensions";

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
    }
    const getAsyncReports = async () => {
        await dispatch(fetchFirebaseReports({filter, order, paginationQuantity, searchBarValue}));
    }
    const dependencyArray = [filter, order, paginationQuantity, searchBarValue];

    const { windowHeight, document, bodyHeight } = useWindowDimensions();
    const {calculatedHeight} = useDefineSidebarSizes({
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
            height={`${calculatedHeight}px`}
        >
            <VStack>
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
                            text={t("databaseTitle")}
                        />
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
                >
                    <DataTable/>
                    <PaginationPanel/>
                </VStack>
            </VStack>
        </StyledSection>
    );
};

export default DataWindow;