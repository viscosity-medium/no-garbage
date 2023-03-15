import styled from "styled-components";

interface IAuthModalStyled {

}

const AuthModalStyled =  styled.div<IAuthModalStyled>`
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 220px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 25px;
    
  
`

export {
    AuthModalStyled
}