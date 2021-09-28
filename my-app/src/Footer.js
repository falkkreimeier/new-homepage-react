import styled from 'styled-components'
import { StyledText } from './Reception'
import Phone from './img/phone_white_24dp.svg'
import Mail from './img/email_white_24dp.svg'

function Footer() {
  return (
    <StyledFotter>
      <StyledText>Falk Kreimeier </StyledText>
      <StyledIcons class="footer__icons" src={Phone} alt="phonenumer" />
      <StyledText>0152-05639742 </StyledText>

      <StyledIcons class="footer__icons" src={Mail} alt="E-Mail Adresse" />
      <StyledText>f.kreimeier@gmx.net</StyledText>
    </StyledFotter>
  )
}

const StyledFotter = styled.footer`
  display: flex;
  justify-content: center;
  background: black;
  color: white;
  grid-area: footer;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  margin-top: 0.5rem;
`

const StyledIcons = styled.img`
  height: 1.2rem;
  padding-right: 0.5rem;
  padding-left: 2rem;
`

export default Footer
