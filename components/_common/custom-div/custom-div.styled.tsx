import styled from "styled-components";

interface IBtnGroupStyled {
    width: number | string
    height: number | string
    backgroundImage?: string
}

const DivWrapperStyled = styled.div<IBtnGroupStyled>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: ${props => props.backgroundImage};
`;

export default  DivWrapperStyled;