import styled from 'styled-components'
import { StyledHeadline } from './Profile'
import { StyledText } from './Reception'
import { StyledButton } from './Portfolio'

function Blog3() {
  return (
    <StyledBlog3>
      <StyledHeadline>Blog-Headline</StyledHeadline>
      <StyledText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, hic
        aperiam. Recusandae itaque excepturi eaque molestias.
      </StyledText>
      <div>
        <StyledButton>weiterlesen</StyledButton>
      </div>
    </StyledBlog3>
  )
}

const StyledBlog3 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  grid-area: blog3;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`
export default Blog3
