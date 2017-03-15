import {names as actionNames} from '../actions'

export const defaultValue = false
export default (state = defaultValue, action) => {
  switch (action.type) {
    case(actionNames.SHOW_RESULT):
      return true
    case (actionNames.HIDE_RESULT):
    case (actionNames.RESET_FORM):
    case (actionNames.ADD_INSTRUCTION):
    case (actionNames.ADD_APPLY):
      return defaultValue
    default:
      return state
  }
}

export const getShowResult = state => state

export const selectors = {
  getShowResult
}
