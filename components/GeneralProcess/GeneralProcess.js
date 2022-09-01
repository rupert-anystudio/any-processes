import { useActor } from '@xstate/react'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { getNodesFromMachine } from '../../lib/getNodesFromMachine'
import { BigButton } from '../BigButton'
import BranchRenderer from '../BranchRenderer'
import { FixedToScreen } from '../FixedToScreen'
import { GeneralProcessContext } from './GeneralProcessContainer'

const Wrap = styled.div`
  width: 100%;
  margin: 40vw 0;
`

const Stage = styled.div`
  width: 100%;
  padding: 2vw 2vw 3vw 2vw;
  background-color: ${props => props.isMatching ? 'blue' : 'white'};
  color: ${props => !props.isMatching ? 'black' : 'white'};
  &:not(:last-child) {
    border-bottom: 1px solid currentColor;
  }
  > strong {
    font-size: 14vw;
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1vw;
    margin-top: 1vw;
  }
`

const Flow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 0;
  align-items: baseline;
  padding-top: 1vw;
  padding-bottom: 2vw;
  &:not(:last-child) {
    border-bottom: 1px dashed currentColor;
  }
  > strong {
    font-size: 3vw;
    white-space: pre;
    /* align-self:center; */
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1vw;
  }
`

const Step = styled.div`
  padding: .5vw 1.8vw;
  border: 1px solid currentColor;
  border-radius: 4vw;
  border-color: ${props => props.isMatching ? 'white' : 'currentColor'};
  background-color: ${props => props.isMatching ? 'white' : 'transparent'};
  color: ${props => props.isMatching ? 'blue' : 'currentColor'};
  > strong {
    font-size: 3vw;
    white-space: pre;
  }
`

const nextEvent = { type: 'next' }

export const GeneralProcess = () => {
  const processService = useContext(GeneralProcessContext)
  const [state] = useActor(processService)
 
  const nodes = getNodesFromMachine(state?.machine)

  const handleNextClick = () => {
    processService.send(nextEvent)
  }

  const stage = typeof state.value === 'string'
    ? state.value
    : Object.keys(state.value)[0]

  useEffect(() => {
    const element = document.getElementById(stage)
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
      notes = [],
    } = node
    const isMatching = state.matches(id)
    if (level < 1) return (
      <Stage isMatching={isMatching} id={id}>
        <strong>{title}</strong>

        <div>{renderChildren()}</div>
      </Stage>
    )
    if (level < 2 && nodes && nodes.length) return (
      <Flow isMatching={isMatching}>
        <strong>{title}</strong>
        <div>{renderChildren()}</div>
      </Flow>
    )
    return (
      <Step isMatching={isMatching}>
        <strong>{title}</strong>
        {renderChildren()}
      </Step>
    )
  }

  return (
    <>
      <Wrap>
        <BranchRenderer
          nodes={nodes}
          renderNode={renderNodeOne}
        />
      </Wrap>
      <FixedToScreen style={{ paddingBottom: '2rem' }}>
        {state.can(nextEvent) && (
          <BigButton
            onClick={handleNextClick}
            label={'Next'}
          />
        )}
      </FixedToScreen>
    </>
  )
}