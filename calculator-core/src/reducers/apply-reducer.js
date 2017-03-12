import {names} from '../actions'

export default (state = 0, action) => {
  switch (action.type) {
    case names.ADD_APPLY:
      return action.payload
    case names.RESET_FORM:
      return 0
    default:
      return state
  }
}

export const getApplyValue = state => state

export const selectors = {
  getApplyValue
}
