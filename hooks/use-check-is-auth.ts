import {useEffect} from "react";
import {useRouter} from "next/router";

const useCheckIsAuth = ({setTokens}) => {

    const { push } = useRouter();

    useEffect(()=>{
        if( typeof window !== undefined ){

            const refreshToken = localStorage.getItem("refreshToken");
            const accessToken = localStorage.getItem("accessToken");

            setTokens({
                refreshToken: refreshToken,
                accessToken: accessToken
            })
            if(!refreshToken || !accessToken) {
                push("/")
            }
        }
    },[])
}

export {
    useCheckIsAuth
}