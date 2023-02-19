import {useEffect} from "react";

type TUseDebounce = (args: IUseDebounce) => void
interface IUseDebounce {
    callback: () => void
    delay: number
    deps?: any[]
}
export const useDebounce:TUseDebounce =({callback, delay, deps= []}) => {
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