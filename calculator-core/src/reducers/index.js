import {combineReducers} from 'redux'
import instructionsReducer, {selectors as instructionsSelectors} from './instructions-reducer'
import applyReducer, {selectors as applySelectors} from './apply-reducer'

export default combineReducers({
  instructions: instructionsReducer,
  apply: applyReducer
})

export const getInstructionList = state => instructionsSelectors.getInstructionList(state.instructions)
export const getApplyValue = state => applySelectors.getApplyValue(state.apply)

export const selectors = {
  getInstructionList,
  getApplyValue
}
