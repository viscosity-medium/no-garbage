import {StyledSection} from "../../../_main/promo-section/ui/promo-section/promo.styled";
import {Text} from "../../../_common/text";
import {DataTable} from "../../data-table/ui/data-table/data-table";
import {FilterSwitch} from "../../../_common/filter-switch";
import {useTranslation} from "next-i18next";
import {PaginationPanel} from "../../pagination-panel";
import {useAppDispatch} from "../../../../store/store";
import {batch, useSelector} from "react-redux";
import {getFilterValue, getOrderValue} from "../../../_common/filter-switch/model/filter-switch.selectors";
import {
    getCurrentPage,
    getPaginationDirection,
    getPaginationQuantity
} from "../../pagination-panel/model/pagination.selectors";
import {getFirstVisibleDoc, getLastVisibleDoc, getSearchBarValue} from "../model/data-window.selectors";
import {moderationDataWindowActions} from "../model/data-window.slice";
import {useDebounce} from "../../../../hooks/use-debounce";
import {HStack, VStack} from "../../../_common/flex-stack";
import {DataSearchInput} from "./data-search-bar.styled";
import {useCallback} from "react";
import {useDefineSidebarSizes} from "../../../../hooks/use-define-sidebar-sizes";
import useWindowDimensions from "../../../../hooks/use-window-dimensions";
import {fetchFirebaseReports} from "../model/data-window.async-thunks";
import {paginationActions} from "../../pagination-panel/model/pagination.slice";

const DataWindow = () => {

    const { t } = useTranslation("moderation");
    const dispatch = useAppDispatch();
    const filter = useSelector(getFilterValue);
    const order = useSelector(getOrderValue);
    const paginationDirection = useSelector(getPaginationDirection);
    const currentPage = useSelector(getCurrentPage);
    const firstDoc = useSelector(getFirstVisibleDoc);
    const lastDoc = useSelector(getLastVisibleDoc);
    const paginationQuantity = useSelector(getPaginationQuantity);
    const searchBarValue = useSelector(getSearchBarValue);

    const dataSearchInputHandler = (e: any) => {
        if(e?.target){
            batch(()=>{
                dispatch(paginationActions.setPaginationDirection("freeze"));
                dispatch(moderationDataWindowActions.setSearchBarText(e.target.value));
            });
        }
    };

    const getAsyncReports = useCallback(
        async () => {
            await dispatch(fetchFirebaseReports({
                filter, order, paginationQuantity, firstDoc,
                searchBarValue, paginationDirection, lastDoc
            }));
        },
        [filter, order, paginationQuantity, searchBarValue, currentPage]
    );

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
                    <HStack>
                        <FilterSwitch/>
                    </HStack>
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