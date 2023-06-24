import {useEffect} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {getLanguage} from "../components/_common/nav-bar/model/nav-bar.selectors";
import {useAppDispatch} from "../store/store";
import {navbarActions} from "../components/_common/nav-bar/model/nav-bar.slice";

const useCustomTranslation = () => {

    const {locale, push, route} = useRouter();
    const dispatch = useAppDispatch();
    const language = useSelector(getLanguage);
    const setLanguage = (language) => dispatch(navbarActions.setLanguage(language));

    useEffect(()=>{
        setLanguage(locale)
    },[])

    useEffect(()=>{
        (async()=>{
            if(language){
                await push(route, undefined, {locale: language})
            }
        })()

    },[language])
    return [language, setLanguage]
}

export {
    useCustomTranslation
}