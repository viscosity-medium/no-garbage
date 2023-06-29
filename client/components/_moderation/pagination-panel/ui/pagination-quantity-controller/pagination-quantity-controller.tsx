import {HorizontalDropdownMenu} from "../../../../_common/dropdown-menu";
import {getPaginationQuantity} from "../../model/pagination.selectors";
import {paginationActions} from "../../model/pagination.slice";
import {useAppDispatch} from "../../../../../store/store";
import {useSelector} from "react-redux";
import colors from "../../../../../styles/globals/colors";

const PaginationQuantityController = () => {

    const dispatch = useAppDispatch();
    const paginationProps = [ "30", "50", "100", "150", ];
    const paginationQuantity = useSelector(getPaginationQuantity);
    const setSelectedProperty = (quantity) => {

        dispatch(paginationActions.setPaginationQuantity(quantity));
        dispatch(paginationActions.setCurrentPage(1));

    };

    return (

        <HorizontalDropdownMenu
            position={"relative"}
            selectedProperty={paginationQuantity}
            setSelectedProperty={setSelectedProperty}
            backgroundColorOnHover={colors.moderation}
            items={paginationProps}
        />

    );
};

export default PaginationQuantityController;