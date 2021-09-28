import styled from 'styled-components'
import Githubimg from './img/github.svg.png'

function Github() {
  return (
    <a href="https://github.com/falkkreimeier">
      <StyledGithub id="github">
        <StyledImg src={Githubimg} alt="Mein github Profil" />
      </StyledGithub>
    </a>
  )
}

export const StyledImg = styled.img`
  position: sticky;
  height: 5rem;
`
const StyledGithub = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  grid-area: github;
  border-radius: var(--border-radius);
  padding: 10px;
  &:hover {
    background: #d4d4d4;
  }
`
export default Github
