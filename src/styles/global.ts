import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    outline: none;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`
