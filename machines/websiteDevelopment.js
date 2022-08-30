import { createMachine } from 'xstate'

const initialContext = {
}

const actions = {
}

const guards = {
}

export const websiteDevelopment = createMachine({
  id: 'websiteDevelopment',
  initial: 'START',
  states: {
    START: {
      on: {}
    }
  },
  context: initialContext
}, {
  actions,
  guards,
})