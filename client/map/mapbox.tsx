import React, {FC, useEffect, useRef, useState} from 'react';
import mapboxGL, {MapMouseEvent} from 'mapbox-gl';
import {useMapResize} from "../hooks/use-map-resize";
import {useInitializeMap} from "../hooks/use-initialize-map";
import {useMapReload} from "../hooks/use-map-reload";

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

    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<any>(null);
    const [mapLng, setMapLng] = useState(lngProp);
    const [mapLat, setMapLat] = useState(latProp);
    const mapHeight = useMapResize({map, size});

    useInitializeMap({map, mapboxGL, mapContainer, lng: mapLng, lat: mapLat, zoom: zoomProp});
    useMapReload({map, lng: lngProp, lat: latProp, zoom: zoomProp});

    useEffect(()=>{

        map?.current?.on("click", (e: MapMouseEvent)=>{
            console.log(JSON.stringify(e.lngLat.wrap()))
        })

    },[])

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