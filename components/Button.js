import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  appearance: none;
  border: none;
  padding: .2rem .6rem;
  border-radius: .2rem;
  font-family: monospace;
  font-size: 1.6rem;
  line-height: inherit;
  background-color: var(--color-btn);
  color: var(--color-txt);
  font-weight: bold;
  &[disabled] {
    opacity: .6;
  }
`