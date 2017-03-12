import * as actionNames from './names'

const actionCreator = (type, payload) => {
  if (!payload) {
    return {type}
  }
  return {type, payload}
}

export const addStep = payload => actionCreator(actionNames.ADD_INSTRUCTION, payload)

export const addApply = payload => actionCreator(actionNames.ADD_APPLY, payload)

export const registerPlugin = payload => actionCreator(actionNames.REGISTER_PLUGIN, payload)

export const resetForm = () => actionCreator(actionNames.RESET_FORM)

export const names = actionNames
