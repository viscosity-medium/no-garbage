import {useAppDispatch} from "../store/store";
import {batch} from "react-redux";
import {loginModalActions} from "../components/_common/login-modal-window/model/login-modal-window.slice";
import {useEffect} from "react";

const useLogOut = () => {

    useEffect(()=>{
        const dispatch = useAppDispatch();

        // if( typeof window !== undefined){
        //     localStorage.removeItem("email");
        //     localStorage.removeItem("password");
        //     localStorage.removeItem("accessToken");
        //     localStorage.removeItem("refreshToken");
        // }
        // batch(()=>{
        //     dispatch(loginModalActions.setAuthModalEmail(""));
        //     dispatch(loginModalActions.setAuthModalPassword(""));
        //     dispatch(loginModalActions.setAuthModalLoginData(""));
        // })
    },[])


}

export {useLogOut}