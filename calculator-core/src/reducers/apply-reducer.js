import {names} from '../actions'

export const defaultValue = 0

export default (state = defaultValue, action) => {
  switch (action.type) {
    case names.ADD_APPLY:
      return action.payload
    case names.RESET_FORM:
      return defaultValue
    default:
      return state
  }
}

export const getApplyValue = state => state

export const selectors = {
  getApplyValue
}
