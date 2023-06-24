import React, {FC} from 'react';
import {useAppDispatch} from "../../../store/store";
import {moderationDataWindowActions} from "../data-window/data-window.slice";
import {DataSearchWrapper} from "./data-search-bar.styled";

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