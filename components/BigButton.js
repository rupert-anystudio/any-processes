import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  appearance: none;
  border: none;
  padding: 3vw 12vw;
  border-radius: 12vw;
  font-size: 7vw;
  line-height: inherit;
  background-color: white;
  color: black;
  box-shadow: 2px 4px 49px -18px black;
  border: 1px solid grey;
  margin: 0;
  &[disabled] {
    opacity: .6;
    cursor: auto;
    pointer-events: none;
  }
`

export const BigButton = ({ label, ...props }) => {
  return (
    <Button {...props}>
      {label}
    </Button>
  )
}