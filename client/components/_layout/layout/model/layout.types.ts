import {ReactNode} from "react";

export interface LayoutProps {
    children: ReactNode
    passedColors: {
        backgroundColor: string
        nameColor1: string
        nameColor2: string
        linkHoverFontColor: string
        linkHoverBackground: string
        profileFontColor: string
    }
}