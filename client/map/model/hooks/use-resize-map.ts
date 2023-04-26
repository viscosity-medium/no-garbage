import {useEffect, useState} from "react";
import sizes from "../../../styles/globals/sizes";
import useWindowDimensions from "../../../hooks/use-window-dimensions";

export const useResizeMap = ({map, size}) => {
    const [mapHeight, setMapHeight] = useState(0);
    const {windowHeight, document, bodyHeight} = useWindowDimensions();
    if(document?.querySelector("body")){
        // @ts-ignore
        document.querySelector("body").style.overflow = "hidden";
    }

    useEffect(() => {

        if(windowHeight && document && bodyHeight){

            const newMapHeight = size === "full" ? windowHeight - sizes.navbarHeight : size;
            setMapHeight(prevState => (newMapHeight));
            map?.current?.resize();

        }

    },[mapHeight, document, windowHeight])

    return mapHeight
}