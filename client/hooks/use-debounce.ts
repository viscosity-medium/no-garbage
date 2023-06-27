import {useEffect} from "react";

type UseDebounce = (args: DebounceProps) => void
interface DebounceProps {
    callback: () => void
    delay: number
    deps?: any[]
}
export const useDebounce:UseDebounce =({callback, delay, deps= []}) => {
    useEffect(
        () => {
            const handler = setTimeout(() => {
                callback();
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        },
        [callback, delay, ...deps]
    );
}