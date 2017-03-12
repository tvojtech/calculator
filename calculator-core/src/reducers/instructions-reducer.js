import {names} from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case names.ADD_INSTRUCTION:
      return [...state, action.payload]
    default:
      return state
  }
}

export const getInstructionList = state => state

export const selectors = {
  getInstructionList
}
