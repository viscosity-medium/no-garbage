import styled from "styled-components";

export interface IStyledSection {
    position?: string
    height?: number | string
    width?: number | string
    backgroundColor?: string
    backgroundImage?: string
    margin?: string
    padding?: string
}

const StyledSection = styled.section<IStyledSection>`
  position: relative;
  width: ${props => props.width || "100%"};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  background-image: ${props => props.backgroundImage};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`



export {
    StyledSection
}