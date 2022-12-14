import styled from 'styled-components'
import BranchRenderer from '../BranchRenderer'
import { useGeneralProcess } from './GeneralProcessContext'

const Wrap = styled.div`
  width: 100%;
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

const NotesWrap = styled.ul`
  font-size: 2vw;
  padding: 0 0 0 4vw;
  margin: 0;
  > li {

  }
`

// const Notes = ({ entries = [] }) => {
//   if (!entries || entries.length < 1) return null
//   return (
//     <NotesWrap>
//       {entries.map(entry => (
//         <li key={entry}>{entry}</li>
//       ))}
//     </NotesWrap>
//   )
// }

export const GeneralProcessOne = () => {
  const { state, nodes } = useGeneralProcess()

  // const stage = typeof state.value === 'string'
  //   ? state.value
  //   : Object.keys(state.value)[0]

  // useEffect(() => {
  //   const element = document.getElementById(stage)
  //   element.scrollIntoView({behavior: 'smooth', block: 'center' })
  // }, [stage])

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
    <Wrap>
      <BranchRenderer
        nodes={nodes}
        renderNode={renderNodeOne}
      />
    </Wrap>
  )
}