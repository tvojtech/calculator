import * as actionNames from './names'

export const addStep = payload => ({
  type: actionNames.ADD_INSTRUCTION,
  payload
})

export const addApply = payload => ({
  type: actionNames.ADD_APPLY,
  payload
})

export const registerPlugin = payload => {
  return {
    type: actionNames.REGISTER_PLUGIN,
    payload
  }
}

export const names = actionNames
