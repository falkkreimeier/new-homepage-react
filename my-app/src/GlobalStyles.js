import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
  --border-radius: 5px;
  --main-padding: 5px;
  --main-width: 250px;
  --color-fond: black;
}

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}


@media only screen and (max-width: 375px) {
  .container {
    grid-template-areas:
      'header'
      'profil'
      'main'
      'facts'
      'interessen'
      'fähigkeiten'
      'portfolio'
      'xing'
      'github'
      'lakritzel'
      'blog1'
      'blog2'
      'blog3'
      'footer';
  }
}


ul {
  margin: 0;
} 

body {
 background-color: black;
  text-align: center;
  font-family: 'PT Serif', serif;
  margin: 0px 20px 0px 20px;
}`

export default GlobalStyle
