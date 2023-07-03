import {useEffect} from "react";

export const useSetMedia = ({setMedia, modalForm}) => {

    useEffect(()=>{

        const photos = modalForm?.photos || [];
        const videos = modalForm?.videos || [];
        const newMedia = [...photos, ...videos];

        setMedia(newMedia);

    },[modalForm]);

};