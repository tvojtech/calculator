import * as actionNames from './names'

const actionCreator = (type, payload) => {type, payload}

export const addStep = payload => actionCreator(actionNames.ADD_INSTRUCTION, payload)

export const addApply = payload =>  actionCreator(actionNames.ADD_APPLY, payload)

export const registerPlugin = payload => actionCreator(actionNames.REGISTER_PLUGIN, payload)

export const names = actionNames
