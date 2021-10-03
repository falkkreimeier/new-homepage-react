import styled from 'styled-components'
import { StyledHeadline } from './Profile'
import { StyledText } from './Reception'
import { StyledButton } from './Portfolio'

function Blog3() {
  return (
    <StyledBlog3>
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
    </StyledBlog3>
  )
}

const StyledBlog3 = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color: white;
  grid-area: blog3;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  @media only screen and (max-width: 375px) {
    max-width: 375px;
    margin: 0;
  }
`
export default Blog3
