import {useEffect} from "react";

export const useMapReload = ({map, lng, lat, zoom}) => {
    useEffect(() => {
        if (map.current) {
            map.current.setCenter([lng, lat]);
            map.current.setZoom(zoom)
        }

    },[map, lng, lat])
}