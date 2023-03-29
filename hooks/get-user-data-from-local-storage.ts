import {useEffect, useState} from "react";

interface UserDataProps {
    email?
}

const getUserDataFromLocalStorage = () => {

    const [userData, setUserData] = useState<UserDataProps>({});
    
    useEffect(()=>{
        if(typeof window !== "undefined"){

            const email = localStorage.getItem("email");
            const newState = {...userData, email};

            setUserData(prevState => newState)
        }
    },[])

    return userData

}

export {
    getUserDataFromLocalStorage
}