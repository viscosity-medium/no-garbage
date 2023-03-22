export interface DropDownMenuProps {
    items: string[]
    position: "absolute" | "relative"
    selectedProperty: string
    setSelectedProperty: any
    backgroundColorOnHover?: string
}