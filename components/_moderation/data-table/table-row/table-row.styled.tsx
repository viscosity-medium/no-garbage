import styled from "styled-components";
import colors from "../../../../styles/globals/colors";

interface IStyledRow {
    position: string
}

export const StyledRow = styled.tr<IStyledRow>`
    display: flex;
    position: ${props => props.position};
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