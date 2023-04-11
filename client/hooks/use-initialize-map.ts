import mapboxGL, { MapboxOptions } from "mapbox-gl";
import { useEffect } from "react";
import {systemVariables} from "../system/system";

export const useInitializeMap = ({map, mapboxGL, mapContainer, lng, lat, zoom}) => {

    useEffect(() => {

        if (map.current) return;

        const mapBoxOptions: MapboxOptions = {
            accessToken: systemVariables.mapboxAccessToken,
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        }

        map.current = new mapboxGL.Map(mapBoxOptions);

    },[]);

}