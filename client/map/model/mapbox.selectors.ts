import {StateSchema} from "../../store/state-schema";

export const getMapboxGeoJsonData = (state: StateSchema) => state.mapbox.geoJsonData;
export const getMapboxMarkerIsSet = (state: StateSchema) => state.mapbox.userMarkerIsSet;
export const getMapboxMarkerIsHovered = (state: StateSchema) => state.mapbox.userMarkerIsHovered;