import {useEffect} from "react";
import {fetchFirebaseLogin} from "../components/_common/login-modal-window/model/login-modal-window.slice";
import {useAppDispatch} from "../store/store";

const useAuthenticateUser = () => {

    if( typeof window !== "undefined"){

        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        const dispatch = useAppDispatch();

        useEffect(()=>{
            (async ()=>{
                if(email && password){
                    await dispatch(fetchFirebaseLogin({email, password}));
                }
            })()
        },[])
    }

}

export {useAuthenticateUser}