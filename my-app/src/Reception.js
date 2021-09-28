import styled from 'styled-components'
import { StyledHeadline } from './Profile'

function Reception() {
  return (
    <StyledReceptionContainer>
      <StyledHeadline>Oh, ein Gast</StyledHeadline>
      <StyledText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        excepturi suscipit, quos exercitationem dolore corporis voluptatem
        repellat incidunt, asperiores laudantium recusandae nam beatae corrupti
        optio a deserunt accusamus sed delectus? <br /> <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        excepturi suscipit, quos exercitationem dolore corporis voluptatem
        repellat incidunt, asperiores laudantium recusandae nam beatae corrupti
        optio a deserunt accusamus sed delectus?
      </StyledText>
    </StyledReceptionContainer>
  )
}

const StyledReceptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  grid-area: reception;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const StyledText = styled.p`
  margin: 0px 0px 20px 0px;
  font-family: 'Inter', sans-serif;
`

export default Reception
