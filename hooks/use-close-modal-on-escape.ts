import {useEffect} from "react";

interface UseCloseModalOnEscape {
    executionFunction: (e: any) => void
    deps?: any[]
}

const useCloseModalOnEscape = ( {executionFunction, deps = []}: UseCloseModalOnEscape ) => {
    useEffect(() => {
        window.addEventListener("keydown", executionFunction, false);
        return () => {
            window.removeEventListener("keydown", executionFunction, false);
        };
        // eslint-disable-next-line
    },deps);
}

export {
    useCloseModalOnEscape
}