import styled from "styled-components";

export interface IModalWindow {
    background?: string
    visibility?: string
    opacity?: number
    height?: string
    width?: string
    zIndex?: number
}
export const ModalWindowBackgroundStyled = styled.dialog<IModalWindow>`
  position: fixed;
  display:  block;
  visibility: ${props => props.visibility};
  background-color: ${props => props.background};
  opacity: ${props => props.opacity};
  left: 0;
  top: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  z-index: ${props => props.zIndex};
  transition: opacity 0.3s ease-in-out;
`