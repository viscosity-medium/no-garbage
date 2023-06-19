import {mapboxMarkerLayerConfig, mapboxSingleFeature, markerTypes} from "./mapbox-configs";
import DefaultMarker from "../ui/marker/marker.svg"
import {createAsyncThunk} from "@reduxjs/toolkit";
import {mapboxApi} from "../../utilities/mapbox-api";

const addMapboxLayer = ({map}) => {
    map.addLayer()
};

const hideIrrelevantLayers = ({ map, markersArray, chosenMarker}) => {

    markersArray.forEach(marker => {
        if(marker !== chosenMarker){
            map.current.setLayoutProperty(`${Object.keys(marker)[0]}-points`, "visibility", "none")
        }
    })

}

const showAllLayers = ({ map, markersArray, chosenMarker}) => {

    markersArray.forEach(marker => {
        if(marker !== chosenMarker){
            map.current.setLayoutProperty(`${Object.keys(marker)[0]}-points`, "visibility", "visible")
        }
    })

}

const addNewMapMarker = ({map, sourceId, coordinates}) => {

    const sourceData = map.current.getSource(sourceId);

    sourceData?.setData({
        type: 'FeatureCollection',
        features: [
            ...sourceData._data.features,
            mapboxSingleFeature({coordinates})
        ]
    });

}

const setUserMapMarker = ({map, sourceId, coordinates}) => {

    const sourceData = map.current.getSource(sourceId);

    if(sourceData){
        sourceData.setData({
            type: 'FeatureCollection',
            features: [
                mapboxSingleFeature({coordinates})
            ]
        });
    } else {
        setTimeout(()=>{
            setUserMapMarker({map, sourceId, coordinates})
        },200)
    }

}



const createGeoJsonMarkersData = ({ geoJsonNeededMarkers }) => ({
    'type': 'FeatureCollection',
    'features': geoJsonNeededMarkers.map((singleMarker)=>({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [
                singleMarker.geometry.coordinates.lat,
                singleMarker.geometry.coordinates.lon
            ]
        },
        properties: {
            title: singleMarker.properties.title,
            description: singleMarker.properties.title,
            type: singleMarker.properties.waste_type,
        }
    }))
});

const convertSvgMarkerToBitMap = ({SvgMarker, fillColor="#0000ff", width = 33, height = 42}) => {

    //undone
    const img = new Image(width,height);
    SvgMarker.fill = fillColor;
    img.src = SvgMarker;

    console.log(img)

    return img;

}

const loadMapboxMarkers = async ({ map, geoJsonData }) => {

        if( typeof(geoJsonData) === "object" ){

            await map.current.on('load', async () => {

                for await (const marker of markerTypes) {

                    const markerName = Object.keys(marker)[0];

                    const geoJsonNeededMarkers = geoJsonData.features.map((singleFeature) => {

                        if(markerName === singleFeature.properties.waste_type) {

                            return singleFeature
                        }

                    }).filter(item => item);

                    const data = createGeoJsonMarkersData({geoJsonNeededMarkers});

                    map.current.loadImage(
                        Object.values(marker)[0].src,
                        (error, image) => {

                            if (error) throw error;

                            //console.log(`${markerName}-points`)
                            //
                            map.current.addImage(`custom-marker-${markerName}`, image);
                            map.current.addSource(`${markerName}-points`, {
                                'type': 'geojson',
                                'data': data
                            });

                            map.current.addLayer(mapboxMarkerLayerConfig({id: `${markerName}`}));
                            // map.current.on("click", `${markerName}-points`, (e) => {
                            //     console.log(e)
                            // })

                        }
                    );

                }

            });

        }

};

export {
    addMapboxLayer,
    loadMapboxMarkers,
    setUserMapMarker,
}