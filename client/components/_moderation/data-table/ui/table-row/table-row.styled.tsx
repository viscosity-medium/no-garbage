import styled from "styled-components";
import colors from "../../../../../styles/globals/colors";

interface IStyledRow {
    position: string
    width?: string
    isChosen?: boolean
}

export const StyledRow = styled.tr<IStyledRow>`
    display: flex;
    position: ${props => props.position};
    width: ${props => props.width};
    transition: 0.2s;
    cursor: pointer;

    &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: ${props => props.isChosen ? colors.opaqueGolden : "none"};
        transition: 0.2s;
    }

    &:hover {
        &:after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background-color: ${props => !props.isChosen ? colors.opaqueBlack : "none"};
        }
    }
`