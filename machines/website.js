import { createMachine } from 'xstate'

const initialContext = {
}

const actions = {
}

const guards = {
}

const machine = 
/** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgHcwAjWASwBcwARMANzABssAHAWzAwoDoBpMgMYBrLADNR+ECyzkKZLBkkAPRAFoATAAYAbNy0BGACwBmABynDpgJxaL6AJ5rT3Tev3bNh-ce03T2gFYrZDQQIlJKGnomVg4uSWlZeUUkEBUEDWNNPU0jMwtrW0MHJ2zXd3VTTQB2K2Mras1gkOQgA */
createMachine({
  context: initialContext,
  id: "website-process",
  initial: "Kickoff",
  states: {
    Kickoff: {},
  },
}, {
  actions,
  guards,
})

export default machine