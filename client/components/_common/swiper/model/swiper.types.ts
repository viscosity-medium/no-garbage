import {ReactNode} from "react";

export interface SwiperModules {
    autoplay?: boolean,
    mouseWheel?: boolean
}

export interface SwiperProps {
    swiperModules?: SwiperModules
    photos?: string[]
    children?: any[]
}
