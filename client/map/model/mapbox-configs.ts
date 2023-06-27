import MarkerBlue from "../ui/marker/marker-blue.png";
import MarkerRed from "../ui/marker/marker-red.png";
import MarkerUser from "../ui/marker/marker-grey.png";
import {reportsStatuses} from "../../components/_moderation/reports-statuses/reports-statuses";

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
    { "Common waste": MarkerBlue },
    { "Construction waste": MarkerRed },
    { "user": MarkerUser },
]

const wasteTypes = ["Common waste", "Construction waste"]

const filtersData = {
    "Communities": ["Option 1", "Option 2", "Option 3"],
    "Status of location": reportsStatuses,
    "Type of Litter": wasteTypes
}

export {
    mapboxMarkerLayerConfig,
    markerTypes,
    filtersData,
    wasteTypes,
    mapboxSingleFeature
}
