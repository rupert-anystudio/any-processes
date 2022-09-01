function addStates(acc, [key, value], parentPath) {
  const { meta = {}, states = {} } = value
  const stateEntries = Object.entries(states)
  const path = [parentPath, key].filter(Boolean).join('.')
  const addition = { id: path, ...meta, title: key }
  if (stateEntries.length) {
    addition.nodes = stateEntries.reduce((acc_, [key_, value_]) => addStates(acc_, [key_, value_], path), [])
  }
  acc.push(addition)
  acc.sort((a, b) => a.order - b.order)
  return acc
}

export function getNodesFromMachine(machine) {
  const nodes = Object
    .entries(machine?.config?.states ?? {})
    .reduce((acc, keyValue) => addStates(acc, keyValue), [])
  return nodes
}