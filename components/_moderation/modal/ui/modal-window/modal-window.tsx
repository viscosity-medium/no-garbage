import { batch, useDispatch, useSelector } from "react-redux";
import { useCloseModalOnEscape } from "../../../../../hooks/use-close-modal-on-escape";
import { useEffect, useState } from 'react';
import { getModalVisibility } from "../../model/modal-selectors";
import useWindowDimensions from "../../../../../hooks/use-window-dimensions";
import ModalWindowContent from "../modal-window-content/modal-window-content";
import { modalActions } from "../../model/modal.slice";
import sizes from "../../../../../styles/globals/sizes";

const ModalWindow = () => {

    const {windowHeight, document, bodyHeight} = useWindowDimensions();
    const [modalWindowHeight, setModalWindowHeight] = useState(0);
    const modalVisibility = useSelector(getModalVisibility);
    const dispatch = useDispatch();

    const onEscapeDown = (e) => {
        if( e.key === "Escape" && modalVisibility){
            batch(()=>{
                dispatch(modalActions.setVisibility());
                dispatch(modalActions.setChosenPhoto(undefined))
            })
        }
    }

    useEffect(() => {
        if(windowHeight && document && bodyHeight){
            const calculatedHeight = (windowHeight > bodyHeight ? windowHeight : bodyHeight) - sizes.navbarHeight;
            setModalWindowHeight(prevState => calculatedHeight);
        }
    },[windowHeight, document, bodyHeight])

    useCloseModalOnEscape({
        executionFunction: onEscapeDown,
        deps: [modalVisibility]
    });

    return (
        <ModalWindowContent
            visibility={modalVisibility}
            modalWindowHeight={`${modalWindowHeight}px`}
        />
    );
};

export { ModalWindow };