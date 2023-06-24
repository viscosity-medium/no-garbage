import {useEffect} from "react";
import {modalWindowActions} from "./modal-window.slice";

export const useSetModalWindowContainerReference = ({modalWindowContainer}) => {
    useEffect(()=>{
        if(typeof window !== "undefined"){
            modalWindowContainer.current = document.querySelector(".modal-portal");
        }
    },[])
};

interface UseCloseModalOnEscape {
    executionFunction: (e: any) => void
    deps?: any[]
}

export const useCloseModalOnEscape = ({executionFunction, deps = []}: UseCloseModalOnEscape) => {

    useEffect(() => {
        window.addEventListener("keydown", executionFunction, false);
        return () => {
            window.removeEventListener("keydown", executionFunction, false);
        };
    }, deps);

}

export const useSetDelayedSwitchModalVisibility = ({dispatch, modalVisibility, loginState}) => {
    useEffect(()=>{
        if(loginState === "success" && modalVisibility){
            setTimeout(()=>{
                dispatch(modalWindowActions.setModalVisibility());
            }, 1000)
        }
    },[loginState]);
}