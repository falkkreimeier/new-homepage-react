import styled from 'styled-components'
import Githubimg from './img/github.svg.png'

function Github() {
  return (
    <StyledA href="https://github.com/falkkreimeier">
      <StyledGithub id="github">
        <StyledImg src={Githubimg} alt="Mein github Profil" />
      </StyledGithub>
    </StyledA>
  )
}

export const StyledImg = styled.img`
  position: sticky;
  height: 5rem;
`

const StyledA = styled.a`
  grid-area: github;
`

const StyledGithub = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  border-radius: var(--border-radius);
  min-width: var(--main-width);
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`
export default Github
