import {useAppDispatch} from "../store/store";
import {batch} from "react-redux";
import {loginFormActions} from "../components/_common/login-form/model/login-form.slice";
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
        //     dispatch(loginFormActions.setLoginFormEmail(""));
        //     dispatch(loginFormActions.setLoginFormPassword(""));
        //     dispatch(loginFormActions.setLoginFormData(""));
        // })
    },[])


}

export {useLogOut}