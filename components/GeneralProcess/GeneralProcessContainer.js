import { useInterpret, useMachine } from '@xstate/react'
import { createContext } from 'react'
import { GeneralProcess } from './GeneralProcess'
import { generalProcessMachine } from './generalProcessMachine'

export const GeneralProcessContext = createContext({})

export const GeneralProcessContainer = () => {
  const processService = useInterpret(generalProcessMachine)
  return (
    <GeneralProcessContext.Provider value={processService}>
      <GeneralProcess />
    </GeneralProcessContext.Provider>
  )
}