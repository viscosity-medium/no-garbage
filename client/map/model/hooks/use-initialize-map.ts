import { MapboxOptions } from "mapbox-gl";
import { useEffect } from "react";
import {systemVariables} from "../../../system/system";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import {useAppDispatch} from "../../../store/store";
import {mapboxActions} from "../mapbox.slice";
import {useSelector} from "react-redux";
import {getLanguage} from "../../../components/_common/nav-bar/nav-bar.selectors";

export const useInitializeMap = ({map, mapboxGL, mapContainer, lng, lat, zoom}) => {

    const dispatch = useAppDispatch();
    const agentLanguage = useSelector(getLanguage);

    useEffect(() => {

        if (map.current) return;

        if(agentLanguage){
            const mapBoxOptions: MapboxOptions = {
                accessToken: systemVariables.mapboxAccessToken,
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [lng, lat],
                zoom: zoom,
                attributionControl: false,
                fadeDuration: 300
            };
            const language = new MapboxLanguage({
                defaultLanguage: agentLanguage === "ge" ? "en" : agentLanguage
            });

            dispatch(mapboxActions.setDefaultMapState());
            map.current = new mapboxGL.Map(mapBoxOptions);
            map.current.addControl(language);

            // @ts-ignore
            document.querySelector("canvas").style.outline = "none"
        }

    },[agentLanguage]);

}