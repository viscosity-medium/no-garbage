import React, {FC, useEffect, useRef, useState} from 'react';
import mapboxGL, {MapMouseEvent} from 'mapbox-gl';
import {useResizeMap} from "../../model/hooks/use-resize-map";
import {useInitializeMap} from "../../model/hooks/use-initialize-map";
import {useReloadMap} from "../../model/hooks/use-reload-map";
import {useSetMapMarkers} from "../../model/hooks/use-set-map-markers";
import {useMapOnClick} from "../../model/hooks/use-map-on-click";
import MarkerDefault from "../marker/marker.svg"

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
    lngProp = 44.783333,
    latProp = 41.716667,
    zoomProp = 11,
}) => {

    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<any>(null);
    const [mapLng, setMapLng] = useState(lngProp);
    const [mapLat, setMapLat] = useState(latProp);
    const mapHeight = useResizeMap({map, size});

    useInitializeMap({map, mapboxGL, mapContainer, lng: mapLng, lat: mapLat, zoom: zoomProp});
    useReloadMap({map, lng: lngProp, lat: latProp, zoom: zoomProp});
    useSetMapMarkers({map});
    useMapOnClick({map});

    // useEffect(()=>{
    //     setMapLng(lngProp);
    //     setMapLat(latProp)
    // },[lngProp, latProp])

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

export {Mapbox};