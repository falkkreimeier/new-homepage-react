import styled from 'styled-components'
import Xingimg from './img/xing.svg'

function Xing() {
  return (
    <a href="https://www.xing.com/profile/falk_kreimeier">
      <StyledXing>
        <StyledImg class="link" src={Xingimg} alt="Mein Xing Profil" />
      </StyledXing>
    </a>
  )
}

export const StyledImg = styled.img`
  position: sticky;
  height: 4rem;
`

const StyledXing = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  background: white;
  grid-area: xing;
  border-radius: var(--border-radius);
  min-width: var(--main-width);
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`
export default Xing
