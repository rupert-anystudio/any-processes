import { useState } from 'react'
import { Node } from './Node'

export const Branch = ({ step, level = 0 }) => {
  const [isVisible, setIsVisible] = useState(step.isVisible ?? false)

  const hasSteps = step.steps && step.steps.length > 0

  const renderFlows = () => {
    if (!isVisible) return null
    if (!hasSteps) return null
    return step.steps.map(subStep => (
      <Branch
        key={subStep.id}
        step={subStep}
        level={level + 1}
      />
    ))
  }

  const handleToggle = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <>
      <Node
        step={step}
        level={level}
        hasSteps={hasSteps}
        onToggle={handleToggle}
        toggleLabel={isVisible ? '-' : '+'}
      />
      {renderFlows()}
    </>
  )
}