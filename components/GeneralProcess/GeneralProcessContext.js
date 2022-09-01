import { useActor, useInterpret } from '@xstate/react'
import { createContext, useContext } from 'react'
import { getNodesFromMachine } from '../../lib/getNodesFromMachine'
import { generalProcessMachine } from './generalProcessMachine'

export const GeneralProcessContext = createContext({})

export const GeneralProcessContextProvider = ({ children }) => {
  const processService = useInterpret(generalProcessMachine)
  return (
    <GeneralProcessContext.Provider value={processService}>
      {children}
    </GeneralProcessContext.Provider>
  )
}

export const useGeneralProcess = () => {
  const service = useContext(GeneralProcessContext)
  const [state] = useActor(service)
  const nodes = getNodesFromMachine(state?.machine || {})
  return {
    state,
    service,
    nodes,
  }
}
