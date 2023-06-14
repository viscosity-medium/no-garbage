import styled from "styled-components";

interface VideosProps {
    width?: string,
    height?: string
    borderRadius?: string
}

const VideoStyled = styled.video<VideosProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.borderRadius};
`;

const SourceStyled = styled.source`

`

export {VideoStyled, SourceStyled}