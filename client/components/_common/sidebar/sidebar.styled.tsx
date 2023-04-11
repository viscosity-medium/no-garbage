import styled from "styled-components";

export interface ISidebar {
    position: string
    top?: string
    left?: string
    right?: string
    bottom?: string
    sidebarHeight?: string | number
    sidebarWidth: string | string[]
    color: string
}

export enum ESidebarTypes {
    Dynamic = "Dynamic",
    Static = "Static"
}

const defineSidebarType = (prop: ESidebarTypes) => {

}

const StyledSidebar = styled.div<ISidebar>`
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  width: ${props => (props.sidebarWidth)};
  height: ${props => props.sidebarHeight};
  background-color: ${props => props.color};
  transition: 0.3s;
`

export {
    StyledSidebar
}