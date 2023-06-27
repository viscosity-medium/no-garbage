import React from 'react';
import {useSelector} from "react-redux";
import {getFilterValue, getOrderValue} from "../model/filter-switch.selectors";
import {useTranslation} from "next-i18next";
import {filterSwitcherActions} from "../model/filter-switch.slice";
import {useAppDispatch} from "../../../../store/store";
import {VerticalDropdownMenu} from "../../dropdown-menu";
import {Div} from "../../custom-image/ui/custom-div.styled";
import {filterOptions, filterOrderOptions} from "../model/filter-options";
import {
    convertFirebaseValueToInterface,
    FilterArgument1, getCapitalizedOrder,
    switchFilterOrder,
    switchFilterProperty
} from "../model/filter-switch.helpers";
import {HStack, VStack} from "../../flex-stack";
import {Text} from "../../text";
import {paginationActions} from "../../../_moderation/pagination-panel/model/pagination.slice";

const FilterSwitch = () => {
    const dispatch = useAppDispatch();
    const order = useSelector(getOrderValue);
    const capitalizedOrder = getCapitalizedOrder({order});
    const filter = useSelector(getFilterValue);
    const setFilter = (arg) => {
        dispatch(paginationActions.setPaginationDirection("freeze"));
        dispatch(paginationActions.setCurrentPage(1));
        dispatch(filterSwitcherActions.setCurrentFilter(arg));
    }
    const selectedProperty = convertFirebaseValueToInterface(filter as FilterArgument1);
    const { t } = useTranslation("moderation");


    return (
        <HStack
            align={"center"}
        >
            <HStack>
                <VStack
                    justify={"center"}
                    position={"relative"}
                    width={"100px"}
                    height={"40px"}
                >
                    <Text
                        textAlign={"center"}
                        tag={"span"}
                        size={"20px"}
                    >
                        Filter
                    </Text>
                </VStack>
                <Div
                    position={"relative"}
                    zIndex={11}
                    width={"170px"}
                    height={"40px"}
                    overflow={"none"}
                >
                    <VerticalDropdownMenu
                        position={"absolute"}
                        items={filterOptions}
                        buttonHeight={40}
                        selectedProperty={selectedProperty}
                        setSelectedProperty={
                            (arg) => switchFilterProperty({arg, setFilter})
                        }
                    />
                </Div>
            </HStack>
            <HStack>
                <VStack
                    justify={"center"}
                    position={"relative"}
                    width={"100px"}
                    height={"40px"}
                >
                    <Text
                        textAlign={"center"}
                        tag={"span"}
                        size={"20px"}
                    >
                        Order
                    </Text>
                </VStack>
                <Div
                    position={"relative"}
                    zIndex={11}
                    width={"170px"}
                    height={"40px"}
                    overflow={"none"}
                >
                    <VerticalDropdownMenu
                        position={"absolute"}
                        items={filterOrderOptions}
                        buttonHeight={40}
                        selectedProperty={capitalizedOrder}
                        setSelectedProperty={
                            (value) => {
                                switchFilterOrder({
                                    value,
                                    dispatch
                                })
                            }
                        }
                    />
                </Div>
            </HStack>
        </HStack>
    );
};

export {FilterSwitch};