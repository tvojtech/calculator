import {names} from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case names.ADD_INSTRUCTION:
      return [...state, action.payload]
    case names.ADD_APPLY:
      return state.filter(intr => intr.type !== 'apply').concat({type: 'apply', value: action.payload})
    default:
      return state
  }
}

export const getInstructionList = state => state
