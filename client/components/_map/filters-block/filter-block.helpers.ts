import {garbageTypes} from "../../../map/model/mapbox-configs";

export const locationStatusFilter = ({
    map,
    filters,
    mapboxGeoJsonData
}) => {

    const activeLocationStatus = filters["Status of location"];

    if(activeLocationStatus.length > 0){

        // @ts-ignore
        const filteredData = mapboxGeoJsonData?.features?.map((feature) => {

            return activeLocationStatus.reduce((accum: any, status: string) => {
                if(feature.properties.status === status){
                    return {
                        ...feature,
                        geometry: {
                            ...feature.geometry,
                            coordinates: [feature.geometry.coordinates.lat, feature.geometry.coordinates.lon]
                        }
                    };
                } else {
                    return accum;
                }
            }, undefined);

        }).filter(feature => feature);

        garbageTypes.forEach(garbageType => {

            const filteredPoints = filteredData.map(feature => {
                if(feature.properties.waste_type === garbageType){
                    return feature;
                }
            }).filter(feature => feature);

            map.current.getSource(`${garbageType}-points`)?.setData({
                type: 'FeatureCollection',
                features: filteredPoints
            });

        });

    } else if (activeLocationStatus.length === 0) {

        garbageTypes.forEach(garbageType => {

            // @ts-ignore
            const filteredPoints = mapboxGeoJsonData?.features?.map((feature)  => {

                if(feature?.properties?.waste_type === garbageType){
                    return {
                        ...feature,
                        geometry: {
                            ...feature?.geometry,
                            coordinates: [feature?.geometry?.coordinates.lat, feature?.geometry?.coordinates.lon]
                        }
                    };
                }

            }).filter(feature => feature);

            map?.current?.getSource(`${garbageType}-points`)?.setData({
                type: 'FeatureCollection',
                features: filteredPoints
            });

        });
    }
};

//

export const litterTypeFilter = ({
    map, filters
}) => {

    const activeLitterTypes = filters["Type of Litter"];

    if(map.current){

        if(activeLitterTypes.length > 0){

            garbageTypes.forEach(garbageType => {
                map?.current?.setLayoutProperty(`${garbageType}-points`, "visibility", "none");
            });

            activeLitterTypes.forEach((activeLitterType) => {
                map?.current?.setLayoutProperty(`${activeLitterType}-points`, "visibility", "visible");
            });

        } else if(activeLitterTypes.length === 0){

            garbageTypes.forEach(garbageType => {
                map?.current?.setLayoutProperty(`${garbageType}-points`, "visibility", "visible");
            });

        }

    }

};

export const masterFilter = ({
    map, filters, mapboxGeoJsonData
}) => {
    locationStatusFilter({
        map,
        filters,
        mapboxGeoJsonData
    });
    litterTypeFilter({
        map,
        filters
    });
};