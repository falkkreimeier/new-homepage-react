import Header from './Header'
import Profile from './Profile'
import Reception from './Reception'
import styled from 'styled-components'
import Interests from './interests'
import Skills from './Skills'
import Facts from './Facts'
import Portfolio from './Portfolio'
import Xing from './xing'
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
`
