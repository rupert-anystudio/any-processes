import { createMachine } from 'xstate'

const initialContext = {
}

const actions = {
}

const guards = {
}

const machine = createMachine({
  context: initialContext,
  id: "strategy-process",
  initial: "Kickoff",
  states: {
    Kickoff: {},
  },
}, {
  actions,
  guards,
})

export default machine