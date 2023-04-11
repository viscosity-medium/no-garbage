import colors from "../styles/globals/colors";

interface ICellTableStatus{
    status: string
}
const useDefineCellTableColor = ({status}: ICellTableStatus) => {

    if(status?.toLowerCase() === "clean"){
        return colors.clean
    } else if ( ["requires moderation", "moderation"]?.includes(status?.toLowerCase())) {
        return colors.moderation
    } else if (status?.toLowerCase() === "dirty") {
        return colors.dirty
    } else if ( ["declined", "rejected"]?.includes(status?.toLowerCase())) {
        return colors.declined
    } else if (status?.toLowerCase() === "not enough info") {
        return colors.notEnough
    } else if ( ["cleanup planned", "scheduled"]?.includes(status?.toLowerCase())){
        return colors.cleanupPlanned
    } else {

    }
}

export {
    useDefineCellTableColor
}