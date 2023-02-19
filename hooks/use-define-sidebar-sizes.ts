import {useEffect, useState} from "react";
import sizes from "../styles/globals/sizes";
import {ESidebarTypes} from "../components/_common/sidebar/sidebar.styled";

const useDefineSidebarSizes = ({
    sidebarType,
    sidebarWidth,
    windowHeight,
    document,
    bodyHeight
}) => {
    const [calculatedHeight, setCalculatedHeight] = useState<string>();
    const [calculatedWidth, setCalculatedWidth] = useState<string>("")
    const [sidebarIsOpened, setSidebarIsOpened] = useState<boolean>(false);
    const changeSidebarWidth = () => {
        setSidebarIsOpened(prevState => !prevState);
    };

    useEffect(()=>{
        setCalculatedWidth(sidebarType === "dynamic" ?
            (sidebarIsOpened ? sidebarWidth[0] : sidebarWidth[1]) :
            sidebarWidth[0])
    },[sidebarIsOpened]);

    useEffect(() => {
        if(windowHeight && document && bodyHeight){
            const sidebarHeight = windowHeight > bodyHeight ? windowHeight : bodyHeight;
            setCalculatedHeight(prevState => `${sidebarHeight - sizes.navbarHeight}px`);
        }
    },[windowHeight, document, bodyHeight]);

    return {
        calculatedWidth,
        calculatedHeight,
        changeSidebarWidth
    }
}

export {
    useDefineSidebarSizes
}