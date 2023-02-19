import React, {FC, useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import {useMapResize} from "../../../hooks/use-map-resize";
import {useInitializeMap} from "../../../hooks/use-initialize-map";
import {useMapReload} from "../../../hooks/use-map-reload";
import {useMapChangeValues} from "../../../hooks/use-map-change-values";

interface IMapbox {
    size: string | number
    margin?: string
    lngProp?: number
    latProp?: number
    zoomProp?: number
}
const Mapbox: FC<IMapbox> = ({
    size,
    margin,
    lngProp= 44.783333,
    latProp= 41.716667,
    zoomProp = 11,
}) => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [mapLng, setMapLng] = useState(lngProp);
    const [mapLat, setMapLat] = useState(latProp);
    const [mapZoom, setMapZoom] = useState(zoomProp)
    const mapHeight = useMapResize({map, size});
    useInitializeMap({map, mapboxgl, mapContainer, lng: mapLng, lat: mapLat, zoom: zoomProp});
    useMapReload({map, lng: lngProp, lat: latProp, zoom: zoomProp});

    useEffect(()=>{
        setMapLng(lngProp);
        setMapLat(latProp)
    },[lngProp, latProp])
    return (
        <div
            style={{
                height: mapHeight,
                margin
            }}
        >
            <div
                ref={mapContainer}
                style={{
                    height: "100%"
                }}
            />
        </div>
    );
};

export default Mapbox;