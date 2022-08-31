import { Step } from './Step'
import { StepList } from './StepList'

export const NestedSteps = ({ steps = [] }) => {
  return (
    <StepList>
      {steps.map(step => (
        <Step
          key={step.id}
          step={step}
        />
      ))}
    </StepList>
  )
}