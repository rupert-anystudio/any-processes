import React from 'react'
import styled from 'styled-components'
import { useAppContext } from './AppContext'

const Wrap = styled.div`
  width: 100%;
  padding: 2rem;
`

const Flow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

const Box = styled.div`
  background: var(--color-step);
  padding: 2rem;
  font-size: 3rem;
  font-family: sans-serif;
  border-radius: 2rem;
  text-align: center;
`

const Arrow = styled.div`
  background: var(--color-step);
  width: .2rem;
  height: 2rem;
  position: relative;
  margin: 0rem auto calc(var(--arrow-size) + 0.2rem) auto;
  &:after {
    content: '';
    position: absolute;
    bottom: calc(var(--arrow-size) * -1);
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-top: var(--arrow-size) solid var(--color-step);
    border-right: var(--arrow-size) solid transparent;
    border-left: var(--arrow-size) solid transparent;
  }
`

export const BoxFlow = ({ steps = [] }) => {
  const { categoryColors } = useAppContext()

  const preparedSteps = steps.map((step, stepIndex) => {
    const { title, category } = step
    const isLast = stepIndex === steps.length - 1
    const color = categoryColors[category]
    return {
      key: title,
      title,
      category,
      isLast,
      color,
    }
  })

  return (
    <Wrap>
      <Flow>
        {preparedSteps.map(step => {
          const { title, color, isLast } = step
          return (
            <React.Fragment key={title}>
              <Box style={{ backgroundColor: color }}>
                {title}
              </Box>
              {!isLast && (
                <Arrow />
              )}
            </React.Fragment>
          )
        })}
      </Flow>
    </Wrap>
  )
}