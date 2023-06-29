import {paginationActions} from "./pagination.slice";
import {batch} from "react-redux";

export const onClickPrevPage = (props) => {

    const {dispatch, currentPage} = props;

    if(currentPage > 1){
        dispatch(paginationActions.setCurrentPage(currentPage - 1));
    }

};

export const onClickNextPage = (props) => {

    const {dispatch, currentPage, totalPages} = props;

    if(currentPage < totalPages){
        batch(()=>{

            dispatch(paginationActions.setCurrentPage(currentPage + 1));

        });
    }

};