import styled from 'styled-components'
import { StyledHeadline } from './Profile'
import { StyledText } from './Reception'
import { StyledButton } from './Portfolio'

function Blog1() {
  return (
    <StyledBlog1>
      <StyledHeadline>
        Das einzige Steak, das man sich beim Essen versauen kann.
      </StyledHeadline>
      <StyledText>
        Es gibt Hüftsteak, Filetsteak, Rumpsteak, T-Bone Steak, Rib-Eye Steak,
        Tomahawk Steak...
      </StyledText>
      <div>
        <StyledButton>weiterlesen</StyledButton>
      </div>
    </StyledBlog1>
  )
}

const StyledBlog1 = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: blog1;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media only screen and (max-width: 375px) {
    max-width: 375px;
    margin: 0;
  }
`

export default Blog1
