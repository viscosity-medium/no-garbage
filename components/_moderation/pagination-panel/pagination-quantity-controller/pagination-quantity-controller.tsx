import React from 'react';
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {getPaginationQuantity} from "../pagination-selectors";
import {paginationActions} from "../pagination-slice";
import CustomSelect from "../../../_common/custom-select/custom-select";

const PaginationQuantityController = () => {
    const dispatch = useAppDispatch();
    const paginationQuantity = useSelector(getPaginationQuantity);
    const setSelectedProperty = (quantity) => dispatch(paginationActions.setPaginationQuantity(quantity));
    return (
        <CustomSelect
            selectedProperty={paginationQuantity}
            setSelectedProperty={setSelectedProperty}
            orientation={"right"}
            types={{
                "3": "3",
                "10": "10",
                "14": "14",
            }}
        />
    );
};

export default PaginationQuantityController;