import {combineReducers} from 'redux'
import instructions, {selectors as instructionsSelectors} from './instructions-reducer'
import apply, {selectors as applySelectors} from './apply-reducer'
import plugins, {selectors as pluginsSelectors} from './plugins-reducer'

export default combineReducers({
  instructions,
  apply,
  plugins
})

export const getInstructionList = state => instructionsSelectors.getInstructionList(state.instructions)
export const getApplyValue = state => applySelectors.getApplyValue(state.apply)
export const getPlugins = state => pluginsSelectors.getPlugins(state.plugins)
export const getCalculatorResultValue = state => {
  const initialValue = getApplyValue(state)
  const plugins = getPlugins(state)
  return getInstructionList(state).reduce((acc, instr) => {
    return plugins.find(pl => pl.type === instr.type).apply(acc, instr.value)
  }, initialValue)
}

export const selectors = {
  getInstructionList,
  getApplyValue,
  getPlugins,
  getCalculatorResultValue
}
