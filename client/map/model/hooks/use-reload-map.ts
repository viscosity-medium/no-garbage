import {useEffect} from "react";

export const useReloadMap = ({map, lng, lat, zoom}) => {

    useEffect(() => {
        if (map.current) {
            //console.log("lng: " + lng, "lat: " + lat)
            map.current.setCenter({lng, lat});
            map.current.setZoom(zoom);
        }

    },[map, lng, lat])
}