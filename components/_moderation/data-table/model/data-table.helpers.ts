import { modalActions } from "../../modal/model/modal.slice";
import { dateOptions } from "../ui/table-row/table-row";
import { batch } from "react-redux";
import colors from "../../../../styles/globals/colors";

const onTableRowClickHandler = ({
    tableRowInfo,
    dispatch,
    modalVisibility
}) => () => {

    const {
        id, document, description,
        status, created, modified,
        community, announcement, location, photos,
    } = tableRowInfo;

    const dateAdded = created ? new Date(created * 1000).toLocaleDateString("en-US", dateOptions) : "————";
    const dateModified = modified ? new Date(modified * 1000).toLocaleDateString("en-US", dateOptions) : "————";

    batch(()=>{
        !modalVisibility ? dispatch(modalActions.setVisibility()) : null;
        dispatch(modalActions.setChosenPhoto(photos[0]?.preview_image_url));
        dispatch(modalActions.setContent({
            id, document, description,
            status, community,
            created: dateAdded,
            modified: dateModified,
            announcement, photos, location
        }));
        dispatch(modalActions.setSaveButtonState({
            text: "Edit form to save changes",
            isActive: false,
            textColor: colors.white,
            backgroundColor: colors.tableCellBorder
        }))
    })
};

export { onTableRowClickHandler }