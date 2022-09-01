import { BigButton } from '../components/BigButton'
import { FixedToBottom } from '../components/FixedToScreen'
import { GeneralProcessContextProvider, useGeneralProcess } from '../components/GeneralProcess/GeneralProcessContext'
import { GeneralProcessOne } from '../components/GeneralProcess/GeneralProcessOne'
import { GeneralProcessTwo } from '../components/GeneralProcess/GeneralProcessTwo'

const NextButton = () => {
  const { state, service } = useGeneralProcess()

  const handleNextClick = () => {
    service.send('next')
  }

  if (!state.can('next')) return null
  return (
    <FixedToBottom>
      <BigButton
        onClick={handleNextClick}
        label={'Next'}
      />
    </FixedToBottom>
  )
}

export default function PageGeneralProcess() {
  return (
    <>
      <GeneralProcessContextProvider>
        {/* <GeneralProcessOne /> */}
        <GeneralProcessTwo />
        {/* <NextButton /> */}
      </GeneralProcessContextProvider>
    </>
  )
}
