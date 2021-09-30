import styled from 'styled-components'
import { StyledHeadline } from './Profile'

function Reception() {
  return (
    <StyledReceptionContainer>
      <StyledHeadline>Oh, ein Gast!</StyledHeadline>
      <StyledText>
        Schön, Sie/Dich kennen zu lernen ... ähh... oder besser gesagt andersrum
        – und damit Herzlich Willkommen! Ich bin Falk, Programmierer,
        Werbetexter, Kaufmann und Schnaps-Dealer. Man könnte sagen, ich habe
        viele Seiten, und das hier ist eine davon. <br /> <br />
        Lakritzel.com, die App und diese Unterseite habe ich komplett
        programmiert und bekritzelt ... textet. Das Zeichnen gehört leider nicht
        zu meinen Stärken, aber dafür kenne ich viele talentierte Art-Directoren
        und Illiustratoren. Wer jetzt denkt: "Sieht geil aus, will ich auch!"
        Unten steht meine Telefonnummer – Einfach anrufen, ich mach das.
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
