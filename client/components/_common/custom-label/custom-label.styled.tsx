import styled from "styled-components";
import colors from "../../../styles/globals/colors";

export const StyledLabel = styled.label`
    position: relative;
    display: inline-flex;
    cursor: pointer;
    &:before{
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        border: 2px solid #AFB1B6;
        border-radius: 4px;
        content: "";
    }
    &:after{
        position: absolute;
        content: "";
        width: 12px;
        height: 12px;
        box-sizing: border-box;
        background-color: ${colors.pastelGray};
        top: 4px;
        left: 4px;
        border-radius: 2px;
        opacity: 0;
        transition: 0.3s;
    }
`