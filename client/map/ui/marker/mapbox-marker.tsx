import {FC} from 'react';
import MarkerSvg from "./marker.svg";
import cls from "./marker.module.scss"

interface MarkerProps {
    className?: "blue" | "red",
}

const MapboxMarker: FC<MarkerProps> = ({ className }) => {

    const chosenClass = className === "blue" ? cls.blue : "red" ? cls.red : "";
    return (
        <MarkerSvg className={chosenClass} />
    );
};

export { MapboxMarker };