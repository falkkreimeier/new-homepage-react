import styled from 'styled-components'
import Lakritzelimg from './img/Lakritzel-Logo.svg'
import { StyledImg } from './Github'

function Lakritzel() {
  return (
    <a href="https://lakritzel.com">
      <StyledLakritzel>
        <StyledImg src={Lakritzelimg} alt="Lakritzel, mein Schnaps" />
      </StyledLakritzel>
    </a>
  )
}

const StyledLakritzel = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  grid-area: lakritzel;
  border-radius: var(--border-radius);
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`

export default Lakritzel
