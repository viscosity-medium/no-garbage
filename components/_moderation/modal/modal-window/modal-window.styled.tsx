import styled from "styled-components";

export interface IModalWindow {
    background?: string
    visibility?: string
    opacity?: number
    height?: string
}
export const ModalWindowStyled = styled.dialog<IModalWindow>`
  position: absolute;
  display:  block;
  visibility: ${props => props.visibility};
  background-color: ${props => props.background};
  opacity: ${props => props.opacity};
  left: 0;
  top: 0;
  width: 100vw;
  height: ${props => props.height};
  border: none;
  z-index: 10;
  transition: 0.3s ease-in-out;
`