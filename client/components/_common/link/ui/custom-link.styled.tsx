import styled from "styled-components";

interface IStyledCustomLink {
    padding?: string
    background?: string
    backgroundImage?: any
    width?: string
    height?: string
    size?: string
    fontWeight?: number
    textDecoration?: string
}

export const StyledCustomLink = styled.span<IStyledCustomLink>`
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.size};
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${props => props.color};
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: ${props => props.padding};
    transition: 0.2s;
    text-align: center;
    width: ${props => props.width};
    height ${props => props.height};
    background-image: ${props => props.backgroundImage};
    text-decoration: ${props => props.textDecoration};

    &:hover{
        background-color: ${props => props.background}
    }
`