import reducer, {defaultValue} from '../show-result-reducer'
import {names} from '../../actions'

it('should return inital state', () => {
  expect(reducer(undefined, {})).toBe(defaultValue)
})

it('should return original state for unsupported action', () => {
  expect(reducer(true, {type: 'SOME_UNSUPPORTED_ACTION'})).toBe(true)
})

it('should reset state for any form change action', () => {
  expect(reducer(true, {type: names.HIDE_RESULT})).toBe(defaultValue)
  expect(reducer(true, {type: names.RESET_FORM})).toBe(defaultValue)
  expect(reducer(true, {type: names.ADD_INSTRUCTION})).toBe(defaultValue)
  expect(reducer(true, {type: names.ADD_APPLY})).toBe(defaultValue)
})
