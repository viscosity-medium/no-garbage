import {useEffect, useState} from "react";
import colors from "../../../../styles/globals/colors";
import {useRouter} from "next/router";

export const useSetOnHoverCover = () => {

    const [backgroundOnHoverColor, setBackgroundOnHoverColor] = useState(colors.moderation);
    const {pathname} = useRouter();

    useEffect(()=> {
        switch (pathname){
            case "/":
                setBackgroundOnHoverColor(colors.pastelGreen);
                break;
            case "/map":
                setBackgroundOnHoverColor(colors.pastelGray);
                break;
            case "/moderation":
                setBackgroundOnHoverColor(colors.moderation);
                break;
        }
    },[pathname])

    return backgroundOnHoverColor;

};