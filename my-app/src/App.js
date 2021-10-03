import Header from './Header'
import Profile from './Profile'
import Reception from './Reception'
import styled from 'styled-components'
import Interests from './Interests'
import Skills from './Skills'
import Facts from './Facts'
import Portfolio from './Portfolio'
import Xing from './Xing'
import Github from './Github'
import Lakritzel from './Lakritzel'
import Blog1 from './Blog1'
import Blog2 from './Blog2'
import Blog3 from './Blog3'
import Footer from './Footer'
import GlobalStyle from './GlobalStyles'

function App() {
  return (
    <GridContainer>
      <GlobalStyle />
      <Header />
      <Profile />
      <Reception />
      <Interests />
      <Skills />
      <Facts />
      <Portfolio />
      <Xing />
      <Github />
      <Lakritzel />
      <Blog1 />
      <Blog2 />
      <Blog3 />
      <Footer />
    </GridContainer>
  )
}

export default App

const GridContainer = styled.div`
  display: grid;
  max-width: 100vh;
  grid-template-areas:
    'head head head head'
    'profileArea reception reception reception'
    'profileArea interests skills portfolio'
    'facts xing github lakritzel'
    'facts blog1 blog2 blog3'
    'footer footer footer footer';
  grid-gap: 0.2rem;
  text-align: center;
  font-family: 'PT Serif', serif;

  @media only screen and (max-width: 375px) {
    grid-template-areas:
      'head'
      'profileArea'
      'reception'
      'facts'
      'interests'
      'skills'
      'portfolio'
      'xing'
      'github'
      'lakritzel'
      'blog1'
      'blog2'
      'blog3'
      'footer';
    grid-gap: 0.5rem;
  }
`
