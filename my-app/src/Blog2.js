import styled from 'styled-components'
import { StyledHeadline } from './Profile'
import { StyledText } from './Reception'
import { StyledButton } from './Portfolio'

function Blog2() {
  return (
    <StyledBlog2>
      <StyledHeadline>
        {' '}
        Das einzige Steak, das man sich beim Essen versauen kann.
      </StyledHeadline>
      <StyledText>
        Es gibt Hüftsteak, Filetsteak, Rumpsteak, T-Bone Steak, Rib-Eye Steak,
        Tomahawk Steak ...
      </StyledText>
      <div>
        <StyledButton>weiterlesen</StyledButton>
      </div>
    </StyledBlog2>
  )
}

const StyledBlog2 = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: blog2;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`
export default Blog2
