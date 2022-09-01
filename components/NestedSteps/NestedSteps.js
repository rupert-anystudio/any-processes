import styled from 'styled-components'
import { Branch } from './Branch'

const Wrap = styled.div`
  width: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: .5rem;
`

export const NestedSteps = ({ steps = [] }) => {
  return (
    <Wrap>
      {steps.map(step => (
        <Branch
          key={step.id}
          step={step}
        />
      ))}
    </Wrap>
  )
}