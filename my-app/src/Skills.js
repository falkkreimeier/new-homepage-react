import styled from 'styled-components'
import { StyledList, StyledOl } from './interests'
import { StyledHeadline } from './Profile'

function Skills() {
  return (
    <StyledSkills>
      <StyledHeadline>Fähigkeiten</StyledHeadline>
      <StyledOl>
        <StyledList>Semantisches HTML</StyledList>
        <StyledList>Java Script</StyledList>
        <StyledList>CSS</StyledList>
        <StyledList>React</StyledList>
        <StyledList>Werbetexter</StyledList>
        <StyledList>Kaufmännische Kenntnisse</StyledList>
        <StyledList>Führungserfahrung</StyledList>
      </StyledOl>
    </StyledSkills>
  )
}

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: skills;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`
export default Skills