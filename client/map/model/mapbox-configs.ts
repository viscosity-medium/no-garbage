import MarkerBlue from "../ui/marker/marker-blue.png";
import MarkerRed from "../ui/marker/marker-red.png";
import MarkerUser from "../ui/marker/marker-grey.png";
import DefaultMarker from "../ui/marker/marker.svg"

const mapboxMarkerLayerConfig = ({id}) => ({
    'id': `${id}-points`,
    'type': 'symbol',
    'source': `${id}-points`,
    'layout': {
        'icon-image': `custom-marker-${id}`,
        'text-field': ['get', 'title'],
        'text-font': [
            'Open Sans Semibold',
            'Arial Unicode MS Bold'
        ],
        'text-offset': [0, 1.25],
        'text-anchor': 'top'
    }
});

const mapboxSingleFeature = ({coordinates}: {coordinates: number[]}) => ({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: coordinates
    },
    properties: {
        title: 'Point #4',
        description: 'Description of point #2',
        type: "blue",
    }
});

const markerTypes = [
    { "blue": MarkerBlue },
    { "red": MarkerRed },
    { "user": MarkerUser },
]

const defaultMarker = MarkerBlue;

export {
    mapboxMarkerLayerConfig,
    markerTypes,
    defaultMarker,
    mapboxSingleFeature
}