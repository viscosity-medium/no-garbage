import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../store/store";
import {getSearchBarValue} from "../data-window/data-window-selectors";
import {moderationDataWindowActions} from "../data-window/data-window-slice";
import {DataSearchInput, DataSearchWrapper} from "./data-search-bar.styled";
const DataSearchBar: FC = () => {
    const dispatch = useAppDispatch();

    const dataSearchInputHandler = (e: any) => {
        if(e?.target){
            dispatch(moderationDataWindowActions.setSearchBarText(e.target.value));
        }
    }


    return (
        <DataSearchWrapper>

        </DataSearchWrapper>
    );
};

export default DataSearchBar;