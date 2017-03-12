import * as actionNames from './names'

export const addStep = payload => ({
  type: actionNames.ADD_INSTRUCTION,
  payload
})

export const addApply = payload => ({
  type: actionNames.ADD_APPLY,
  payload
})

export const names = actionNames
