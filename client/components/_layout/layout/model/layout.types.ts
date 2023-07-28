import {ReactNode} from "react";
import {NextFont} from "@next/font";

export interface LayoutProps {
    children: ReactNode
    className?: string | NextFont
    passedColors: {
        backgroundColor: string
        nameColor1: string
        nameColor2: string
        linkHoverFontColor: string
        linkHoverBackground: string
        profileFontColor: string
    }
}