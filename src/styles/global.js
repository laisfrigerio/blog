import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const { primary } = theme.colors
const { montserrat } = theme.fontFamily

const GlobalStyle = createGlobalStyle`
  body, main, nav, header, article, section, ul, li, a, input, aside, figure, button, table, thead, tbody, td, th, tr, div, span, h1, h2, h3, h4,  h5, h6 {
    border: none;
    box-sizing: border-box;
    font-family: ${montserrat};
    font-size: 13px;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${primary};
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    margin-top: 6rem;
  }
`;

export { GlobalStyle }
