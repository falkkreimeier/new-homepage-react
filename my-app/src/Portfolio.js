import styled from 'styled-components'
import Portfolioimg2 from './img/200723_Falk_Kreimeier_Portfolio-komprimiert Kopie.pdf'
import { StyledHeadline } from './Profile'
import Video from './img/Profile_Video.mp4'
import Portfolioimg from './img/Portfolio.png'
// import ReactPlayer from 'react-player'

function Portfolio() {
  return (
    <StyledPortfolio>
      <StyledHeadline>Da wird die Milch sauer!</StyledHeadline>
      <a href={Video}>
        <StyledPortfolioImg
          src={Portfolioimg}
          alt="Werbung für Andros, eine vegane Joghurtalternative"
        />
      </a>
      <div>
        <StyledButton>Portfolio</StyledButton>
      </div>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.div`
  grid-area: portfolio;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  grid-area: portfolio;
  border-radius: var(--border-radius);
  padding: var(--main-padding);
  min-width: var(--main-width);
`

const StyledReactPlayer = styled.div`
  grid-area: portfolio;
  height: 10px;
  max-height: 2rem;
  margin: 0px 0px 15px 0px;
`

export const StyledButton = styled.button`
  min-width: 130px;
  height: 40px;
  text-decoration: none;
  border: 1px solid black;
  padding: var(--main-padding);
  margin: 0 0 20px 0;
  border-radius: 20px 40px 40px 20px;
  background-color: white;
  font-family: 'Inter', sans-serif;
  color: black;
  box-shadow: 0px 0px 10px 5px black;
  &:hover {
    background-color: black;
    box-shadow: 0px 0px 5px 5px grey;
    color: white;
  }
`

const StyledPortfolioImg = styled.img`
  max-height: 6rem;
  margin: 0px 0px 15px 0px;
`

export default Portfolio
