import styled from 'styled-components'
import { Button } from '../Button'

const Wrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-gap: .5rem;
  grid-template-areas: "toggle title";
  cursor: ${props => props.isClickable ? 'pointer' : 'default'};
  user-select: none;
`

const Title = styled.div`
  font-family: sans-serif;
  font-size: 2rem;
  grid-area: title;
`

const Box = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: .3rem;
  background-color: var(--color-btn);
  justify-self: center;
  align-self: center;
  font-family: sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
  grid-area: toggle;
  appearance: none;
  border: none;
  outline: none;
  letter-spacing: auto;
`

export const Node = ({
  step,
  level,
  hasSteps = false,
  onToggle,
  toggleLabel,
  // children
}) => {

  const handleClick = () => {
    if (!hasSteps) return
    onToggle()
  }

  return (
    <Wrap style={{ marginLeft: `${level * 2.5}rem`}} onClick={handleClick} isClickable={hasSteps}>
      <Title>{step.title}</Title>
      <Box>
        {hasSteps ? toggleLabel : ''}
      </Box>
    </Wrap>
  )
}