import styled from "styled-components";

export interface IStyledLinkPanel {
}
const StyledLinkPanel = styled.div<IStyledLinkPanel>`
  //margin: 0 396px 0 228px;
  margin: 0 20.625% 0 11.875%;
  display: flex;
  justify-content: space-between;
  width: 26.40625%;//507px;
  height: 100%;
`

export {
    StyledLinkPanel
}