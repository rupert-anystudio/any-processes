import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: white;
    --color-txt: black;
    --color-step: #cccccc;
    --arrow-size: .7rem;
    --color-btn: #cccccc;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body, #__next {
    background-color: var(--color-bg);
    color: var(--color-txt);
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, strong, button {
    font-weight: normal;
  }

  #__next {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`