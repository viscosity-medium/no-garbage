import {mapboxMarkerLayerConfig, mapboxSingleFeature, markerTypes} from "./mapbox-configs";
import DefaultMarker from "../ui/marker/marker.svg"

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
        console.log("one more time")
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
            coordinates: singleMarker.geometry.coordinates
        },
        properties: {
            title: singleMarker.properties.title,
            description: singleMarker.properties.title,
            type: singleMarker.properties.type,
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

                    const geoJsonNeededMarkers = geoJsonData.features.map((singleFeature) => {
                        if(Object.keys(marker)[0] === singleFeature.properties.type) {
                            return singleFeature
                        }
                    }).filter(item => item);

                    const data = createGeoJsonMarkersData({geoJsonNeededMarkers});

                    map.current.loadImage(
                        Object.values(marker)[0].src,
                        (error, image) => {

                            if (error) throw error;

                            map.current.addImage(`custom-marker-${Object.keys(marker)[0]}`, image);
                            map.current.addSource(`${Object.keys(marker)[0]}-points`, {
                                'type': 'geojson',
                                'data': data
                            });
                            map.current.addLayer(mapboxMarkerLayerConfig({id: `${Object.keys(marker)[0]}`}));
                            // map.current.on("click", `${Object.keys(marker)[0]}-points`, (e) => {
                            //     console.log(e)
                            // })

                        }
                    );

                }


            })

        }

}

export {
    addMapboxLayer,
    loadMapboxMarkers,
    setUserMapMarker
}