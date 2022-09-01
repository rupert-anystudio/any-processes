import styled from 'styled-components'
import BranchRenderer from '../BranchRenderer'
import { useGeneralProcess } from './GeneralProcessContext'

const Wrap = styled.div`
  width: 100%;
`

const Stage = styled.div`
  width: 100%;
  font-size: clamp(2rem, 12vw, 12rem);
  padding: 2rem;
  border-bottom: 1px solid currentColor;
  text-align: center;
  background: ${props => props.isMatching ? '#d4d1e1' : 'inherit'};
  transition: background .2s ease-in-out;
`

const Step = styled.div`
  width: 100%;
  font-size: clamp(1.6rem, 6vw, 8rem);
  padding: 1rem 2rem;
  border-bottom: 1px solid currentColor;
  text-align: center;
  background: ${props => props.isMatching ? '#d4d1e1' : 'inherit'};
  transition: background .2s ease-in-out;
`

export const GeneralProcessTwo = () => {
  const { state, service, nodes } = useGeneralProcess()

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
    if (level === 0) return (
      <>
        <Stage isMatching={isMatching}>
          <strong>{title}</strong>
        </Stage>
        {renderChildren()}
      </>
    )
    if (level === 1 && (!nodes || !nodes.length)) return (
      <>
        <Step isMatching={isMatching}>
          <strong>{title}</strong>
          {renderChildren()}
        </Step>
      </>
    )
    return null
  }

  return (
    <Wrap>
      <BranchRenderer
        nodes={nodes}
        renderNode={renderNodeOne}
      />
    </Wrap>
  )
}