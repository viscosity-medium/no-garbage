import {useEffect, useState} from "react";
import sizes from "../../../styles/globals/sizes";
import useWindowDimensions from "../../../hooks/use-window-dimensions";

export const useMapResize = ({map, size}) => {
    const [mapHeight, setMapHeight] = useState(0);
    const {windowHeight, document, bodyHeight} = useWindowDimensions();
    if(document?.querySelector("body")){
        // @ts-ignore
        document.querySelector("body").style.overflow = "hidden";
    }
    if(size === "full"){
        useEffect(() => {
            if(windowHeight && document && bodyHeight){
                setMapHeight(prevState => (windowHeight - sizes.navbarHeight));
                map?.current?.resize();
            }
        },[mapHeight, document])
    } else {
        useEffect(() => {
            if(windowHeight && document && bodyHeight){
                setMapHeight(prevState => (size));
                map?.current?.resize();
            }
        },[mapHeight, document])
    }

    return mapHeight
}