import styled from 'styled-components'

const StepWrap = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(0, 0, 128, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

const StepTitle = styled.span`
  font-family: sans-serif;
`

const Steps = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: .5rem;
  margin-top: 1rem;
`

const StepEntry = ({ step, level = 1, hasSteps = false, children }) => {
  return (
    <StepWrap>
      <StepTitle>{step.title}</StepTitle>
      {hasSteps && children}
    </StepWrap>
  )
}

export const Step = ({ step, level }) => {
  const hasSteps = step.steps && step.steps.length > 0

  const renderFlows = () => {
    if (!hasSteps) return null
    return (
      <Steps>
        {step.steps.map(subStep => (
          <Step
            key={subStep.id}
            step={subStep}
            level={level + 1}
          />
        ))}
      </Steps>
    )
  }

  return (
    <StepEntry
      step={step}
      level={level}
      hasSteps={hasSteps}
    >
      {renderFlows()}
    </StepEntry>
  )
}