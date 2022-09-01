import { BigButton } from '../components/BigButton'
import { FixedToBottom } from '../components/FixedToScreen'
import GeneralProcess from '../components/GeneralProcess'
import { GeneralProcessContextProvider, useGeneralProcess } from '../components/GeneralProcess/GeneralProcessContext'

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
        <GeneralProcess />
        <NextButton />
      </GeneralProcessContextProvider>
    </>
  )
}
