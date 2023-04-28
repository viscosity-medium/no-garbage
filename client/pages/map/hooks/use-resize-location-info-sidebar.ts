import {useEffect} from "react";
import sizes from "../../../styles/globals/sizes";
import useWindowDimensions from "../../../hooks/use-window-dimensions";

const useResizeLocationInfoSidebar = ({setModalWindowHeight}) => {

    const {windowHeight, document, bodyHeight} = useWindowDimensions()

    useEffect(() => {
        if(windowHeight && document && bodyHeight){
            const calculatedHeight = (windowHeight > bodyHeight ? windowHeight : bodyHeight) - sizes.navbarHeight;
            setModalWindowHeight(prevState => calculatedHeight);
        }
    },[windowHeight, document, bodyHeight])

}

export {
    useResizeLocationInfoSidebar
}