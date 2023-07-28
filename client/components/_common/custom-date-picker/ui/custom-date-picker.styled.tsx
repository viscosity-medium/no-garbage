import styled from "styled-components";
import {DatePicker} from "antd";
import colors from "../../../../styles/globals/colors";

export const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    height: 100%;
    font-size: 14px;
    border: none;
    border-radius: 8px;
    background-color: ${colors.middleGrey};
    box-shadow: none;
`;