import {wasteTypes} from "../../../../map/model/mapbox-configs";

const returnAllFeatures = ({map, mapboxGeoJsonData}) => {

    wasteTypes.forEach(garbageType => {

        const filteredPoints = mapboxGeoJsonData?.features?.map((feature)  => {

            if(feature?.properties?.waste_type === garbageType){
                console.log(feature?.geometry?.coordinates.lat);
                console.log(feature?.geometry?.coordinates.lon)
                return {
                    ...feature,
                    geometry: {
                        ...feature?.geometry,
                        coordinates: [
                            feature?.geometry?.coordinates.lon,
                            feature?.geometry?.coordinates.lat,
                        ],
                    }
                };
            }

        }).filter(feature => feature);

        console.log(filteredPoints)

        map?.current?.getSource(`${garbageType}-points`)?.setData({
            type: 'FeatureCollection',
            features: filteredPoints
        });

    });

}

const addFeaturesByFilterParameter = ({ mapboxGeoJsonData, activeFilter, featureParameter }) => {
    return mapboxGeoJsonData?.features?.map((feature) => {

        return activeFilter.reduce((accum: any, filterValue: string) => {
            if(feature.properties?.[featureParameter]?.toLowerCase() === filterValue.toLowerCase()){
                return {
                    ...feature,
                    geometry: {
                        ...feature.geometry,
                        coordinates: [
                            feature.geometry.coordinates.lon,
                            feature.geometry.coordinates.lat,
                        ]
                    }
                };
            } else {
                return accum;
            }
        }, undefined);

    }).filter(feature => feature);
};



export const masterFilter = ({
    map,
    filters,
    mapboxGeoJsonData
}) => {

    const activeLocationStatus = filters["Status of location"];
    const activeLitterTypes = filters["Type of Litter"];
    const activeCommunities = filters["Communities"];

    if( map.current && (activeLocationStatus.length > 0 || activeCommunities.length > 0) ){

        addFeaturesByFilterParameter({
            mapboxGeoJsonData,
            activeFilter: activeLocationStatus,
            featureParameter: "status"
        });

        const filteredLocationStatusData = addFeaturesByFilterParameter({
            mapboxGeoJsonData,
            activeFilter: activeLocationStatus,
            featureParameter: "status"
        });

        const filteredCommunityData = addFeaturesByFilterParameter({
            mapboxGeoJsonData,
            activeFilter: activeCommunities,
            featureParameter: "community"
        });

        wasteTypes.forEach(garbageType => {

            const filteredPoints = [
                ...filteredLocationStatusData,
                ...filteredCommunityData
            ].map(feature => {
                if(feature.properties.waste_type === garbageType){
                    return feature;
                }
            }).filter(feature => feature);

            map.current.getSource(`${garbageType}-points`)?.setData({
                type: 'FeatureCollection',
                features: filteredPoints
            });

        });

    } else if (activeLocationStatus.length === 0 && activeCommunities.length === 0) {

        console.log("return all features");
        returnAllFeatures({map, mapboxGeoJsonData});

    }

    if(activeLitterTypes.length > 0){

        wasteTypes.forEach(garbageType => {
            map?.current?.setLayoutProperty(`${garbageType}-points`, "visibility", "none");
        });

        activeLitterTypes.forEach((activeLitterType) => {
            map?.current?.setLayoutProperty(`${activeLitterType}-points`, "visibility", "visible");
        });

    } else if(activeLitterTypes.length === 0){

        wasteTypes.forEach(garbageType => {
            map?.current?.setLayoutProperty(`${garbageType}-points`, "visibility", "visible");
        });

    }

};