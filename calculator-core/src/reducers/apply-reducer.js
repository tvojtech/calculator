import {names} from '../actions'

export default (state = 0, action) => {
  switch (action.type) {
    case names.ADD_APPLY:
      return action.payload
    default:
      return state
  }
}

export const getApplyValue = state => state

export const selectors = {
  getApplyValue
}
