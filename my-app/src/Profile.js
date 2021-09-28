import Kritzelkopf from './img/Profil.JPG'
import styled from 'styled-components'

function Profile() {
  return (
    <ProfileContainer>
      <StyledHeadline>Kritzelkopf</StyledHeadline>
      <StyledProfileImage src={Kritzelkopf} alt="Profilbild" />
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  grid-area: profileArea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
`

export const StyledHeadline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 10px;
  margin: 10px 0px 5px 0px;
  text-decoration: none;
  color: #58555a;
`

const StyledProfileImage = styled.img`
  position: sticky;
  height: 20rem;
  padding: 0px;
`

export default Profile
