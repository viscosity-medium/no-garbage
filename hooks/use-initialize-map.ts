import {useEffect} from "react";

export const useInitializeMap = ({map, mapboxgl, mapContainer, lng, lat, zoom}) => {
    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });
    },[]);
}