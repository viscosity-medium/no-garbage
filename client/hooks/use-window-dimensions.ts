import { useEffect, useState } from 'react';

type useWindowDimensions = {
    windowWidth?: number;
    windowHeight?: number;
    bodyHeight?: number;
    document?: Document;
};

const useUseWindowDimensions = (): useWindowDimensions => {
    const [useWindowDimensions, setUseWindowDimensions] = useState<useWindowDimensions>({
        windowWidth: undefined,
        windowHeight: undefined,
        document: undefined,
        bodyHeight: undefined
    });
    useEffect(() => {
        function handleResize(): void {
            setUseWindowDimensions({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                document: document,
                bodyHeight: document?.querySelector("body")!.offsetHeight
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return useWindowDimensions;
};

export default useUseWindowDimensions;