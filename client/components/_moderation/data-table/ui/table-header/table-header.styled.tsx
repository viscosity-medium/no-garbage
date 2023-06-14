import styled from "styled-components";
import colors from "../../../../../styles/globals/colors";

interface IStyledRow {
    position: string
    width?: string
    top?: number
    zIndex?: number
}

export const StyledTableHeader = styled.thead<IStyledRow>`
    display: flex;
    position: ${props => props.position};
    z-index: ${props => props.zIndex};
    width: ${props => props.width};
    top: ${props => props.top};
    //margin-bottom: 4px;
    transition: 0.2s;
    cursor: pointer;

    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        transition: 0.2s;
    }

    &:hover {
        &:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background-color: ${colors.opaqueBlack};
        }
    }
`