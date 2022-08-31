import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: white;
    --color-txt: black;
    --color-step: #cccccc;
    --arrow-size: .7rem;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--color-bg);
    color: var(--color-txt);
  }
`