import styled from "styled-components";
import colors from "../../../styles/globals/colors";

export const StyledTable = styled.table`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    height: 65vh;
    width: 100%;
    padding-right: 5px;

    &::-webkit-scrollbar {
        width: 10px;
        scroll-padding: 2px;
    }
    
    /* Track */
    
    &::-webkit-scrollbar-track {
        background: ${colors.tableCellDark};
    }
    
    /* Handle */
    
    &::-webkit-scrollbar-thumb {
        border: 3px solid ${colors.tableCellDark};
        border-radius: 10px;
        background: ${colors.white};
    }
`
export const StyledTableBody = styled.tbody`
    height: 100%;
    width: 100%;
`