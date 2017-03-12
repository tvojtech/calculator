import {names as actionNames} from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case actionNames.REGISTER_PLUGIN:
      return [...state, action.payload]
    default :
      return state
  }
}

export const getPlugins = state => state

export const selectors = {
  getPlugins
}
