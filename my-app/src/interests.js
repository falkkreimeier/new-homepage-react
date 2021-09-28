import styled from 'styled-components'
import { StyledHeadline } from './Profile'

function Interests() {
  return (
    <StyledInterests>
      <StyledHeadline>Interessen</StyledHeadline>
      <StyledOl>
        <StyledList>Programmieren</StyledList>
        <StyledList>Bücher (Fantasy)</StyledList>
        <StyledList>Gaming</StyledList>
        <StyledList>Neue Dinge erfinden, z.B. Lakritzel</StyledList>
        <StyledList>Hanteln schubsen</StyledList>
        <StyledList>Schreiben/Texten</StyledList>
      </StyledOl>
    </StyledInterests>
  )
}

const StyledInterests = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  grid-area: interests;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const StyledList = styled.li`
  text-align: left;
  padding-bottom: -5px;
  font-family: 'Inter', sans-serif;
`

export const StyledOl = styled.ol`
  margin: 0;
`

export default Interests
