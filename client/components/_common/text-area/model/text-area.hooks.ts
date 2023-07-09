import {MutableRefObject, useEffect} from "react";

interface ResizeParameters {
    reference:  MutableRefObject<HTMLTextAreaElement> | null
    contentLength: number
}

interface ResizeTextArea {
    resizeParameters: ResizeParameters[]
}

export const useResizeTextArea = ({resizeParameters}: ResizeTextArea) => {

    const dependencies = resizeParameters?.map(object => object?.contentLength);

    useEffect(()=>{

        resizeParameters?.forEach((object)=>{

            const {reference} = object;

            if(reference?.current?.style){
                reference.current.style.height = "auto";
                reference.current.style.height = reference?.current?.scrollHeight + "px";
            }

        });

    },dependencies);

};