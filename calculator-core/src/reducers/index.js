import {combineReducers} from 'redux'
import instructions, {selectors as instructionsSelectors} from './instructions-reducer'
import apply, {selectors as applySelectors} from './apply-reducer'
import plugins, {selectors as pluginsSelectors} from './plugins-reducer'
import showResult, {selectors as showResultSelectors} from './show-result-reducer'

export default combineReducers({
  instructions,
  apply,
  plugins,
  showResult
})

export const getInstructionList = state => instructionsSelectors.getInstructionList(state.instructions)
export const getApplyValue = state => applySelectors.getApplyValue(state.apply)
export const getPlugins = state => pluginsSelectors.getPlugins(state.plugins)
export const getCalculatorResultValue = state => {
  console.log('getCalculatorResultValue')
  const initialValue = getApplyValue(state)
  const plugins = getPlugins(state)
  return getInstructionList(state).reduce((acc, instr) => {
    return plugins.find(pl => pl.type === instr.type).apply(acc, instr.value)
  }, initialValue)
}
export const getShowResult = state => showResultSelectors.getShowResult(state.showResult)

export const selectors = {
  getInstructionList,
  getApplyValue,
  getPlugins,
  getCalculatorResultValue,
  getShowResult
}
