import {useEffect} from "react";

const useCloseModalOnEscape = ( executionFunction ) => {
    useEffect(() => {
        window.addEventListener("keydown", executionFunction, false);
        return () => {
            window.removeEventListener("keydown", executionFunction, false);
        };
        // eslint-disable-next-line
    },[]);
}

export {
    useCloseModalOnEscape
}