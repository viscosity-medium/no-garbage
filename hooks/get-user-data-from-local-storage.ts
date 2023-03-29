import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getLoginData} from "../components/_common/login-modal-window/model/login-modal-window.selectors";

interface UserDataProps {
    email?
}

const getUserDataFromLocalStorage = () => {

    const profileData = useSelector(getLoginData);
    const [localStorageUserData, setLocalStorageUserData] = useState<UserDataProps>({});
    
    useEffect(()=>{
        if(typeof window !== "undefined"){

            const email = localStorage.getItem("email");
            const newState = {...localStorageUserData, email};

            setLocalStorageUserData(prevState => newState)
        }
    },[profileData])

    return localStorageUserData

}

export {
    getUserDataFromLocalStorage
}