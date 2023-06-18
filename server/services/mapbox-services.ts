import {testData} from "../mapbox/test-data";

class MapboxServices {

    async getMapboxGeoJsonData(){
        return testData
    }

}

const mapboxServices = new MapboxServices();

export {
    mapboxServices
}