import {Dispatch, SetStateAction} from "react";

export interface DropDownMenuProps {
    items: string[]
    position: "absolute" | "relative"
    selectedProperty: string
    setSelectedProperty: Dispatch<SetStateAction<string>>
    buttonHeight?: number
    buttonWidth?: number
    backgroundColorOnHover?: string
}