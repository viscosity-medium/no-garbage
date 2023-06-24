import {modalWindowActions} from "./modal-window.slice";

export const onEscapeDown = ({modalWindowVisibility, dispatch}) => (e) => {

    if(e.key === "Escape" && modalWindowVisibility){
        dispatch(modalWindowActions.setModalVisibility());
    }
    
};

export const switchModalWindowVisibility = ({dispatch}) => {
    dispatch(modalWindowActions.setModalVisibility());
};