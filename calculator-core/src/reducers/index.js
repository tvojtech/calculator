import {combineReducers} from 'redux'
import instructionsReducer, {selectors as instructionsSelectors} from './instructions-reducer'
import applyReducer, {selectors as applySelectors} from './apply-reducer'
import pluginsReducer, {selectors as pluginsSelectors} from './plugins-reducer'

export default combineReducers({
  instructions: instructionsReducer,
  apply: applyReducer,
  plugins: pluginsReducer
})

export const getInstructionList = state => instructionsSelectors.getInstructionList(state.instructions)
export const getApplyValue = state => applySelectors.getApplyValue(state.apply)
export const getPlugins = state => pluginsSelectors.getPlugins(state.plugins)

export const selectors = {
  getInstructionList,
  getApplyValue,
  getPlugins
}
