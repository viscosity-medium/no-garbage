
class MapboxServices {

    async getMapboxGeoJsonData(){
        return {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [44.783333, 41.716667]
                    },
                    properties: {
                        title: 'Point #1',
                        description: 'Description of point #1'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [45.783333, 42.716667]
                    },
                    properties: {
                        title: 'Point #2',
                        description: 'Description of point #2'
                    }
                }
            ]
        }
    }

}

const mapboxServices = new MapboxServices();

export {
    mapboxServices
}