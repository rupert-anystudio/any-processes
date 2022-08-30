import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-bg: black;
    --color-txt: white;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--color-bg);
    color: var(--color-txt);
  }
`