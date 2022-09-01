import { useEffect } from 'react'
import styled from 'styled-components'
import BranchRenderer from '../BranchRenderer'
import { useGeneralProcess } from './GeneralProcessContext'

const Wrap = styled.div`
  width: 100%;
  user-select: none;
  cursor: pointer;
`

const Stage = styled.div`
  width: 100%;
  font-size: clamp(2rem, 12vw, 12rem);
  padding: 2rem;
  border-bottom: 1px solid currentColor;
  text-align: center;
  background: ${props => props.isMatching ? 'yellow' : '#d4d1e1'};
  transition: background .2s ease-in-out;
  overflow: hidden;
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .6rem;
  }
`

const Step = styled.div`
  flex: 0;
  font-size: 1.8rem;
  white-space: pre;
  background: white;
  padding: 1rem;
  border-radius: .5rem;
  background: inherit;
  border: 1px solid currentColor;
  background: ${props => props.isMatching ? 'black' : 'transparent'};
  color: ${props => props.isMatching ? 'yellow' : 'currentColor'};
`

export const GeneralProcessTwo = () => {
  const { state, service, nodes } = useGeneralProcess()

  const handleNextClick = () => {
    service.send('next')
  }

  const stage = typeof state.value === 'string'
    ? state.value
    : Object.keys(state.value)[0]

  useEffect(() => {
    const element = document.getElementById(stage)
    if (!element) return
    element.scrollIntoView({behavior: 'smooth', block: 'center' })
  }, [stage])

  const renderNodeOne = ({
    node = {},
    level = 0,
    renderChildren,
  }) => {
    const {
      id,
      title,
      nodes = [],
      // notes = [],
    } = node
    const isMatching = state.matches(id)
    if (level === 0) {
      // if (!isMatching) return null
      return (
        <>
          <Stage isMatching={isMatching} id={id}>
            <strong>{title}</strong>
            {true && (
              <div>
                {renderChildren()}
              </div>
            )}
          </Stage>
        </>
      )
    }
    if (level === 1) {
      return (
        <>
          <Step isMatching={isMatching}>
            <strong>{title}</strong>
            {renderChildren()}
          </Step>
        </>
      )
    }
    return null
  }

  return (
    <Wrap onClick={handleNextClick}>
      <BranchRenderer
        nodes={nodes}
        renderNode={renderNodeOne}
      />
    </Wrap>
  )
}