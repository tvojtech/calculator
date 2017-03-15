import reducer, {defaultValue} from '../apply-reducer'
import {names as actionNames} from '../../actions'

it('should return inital state', () => {
  expect(reducer(undefined, {})).toBe(defaultValue)
})

it('should return original state for unsupported action', () => {
  expect(reducer(1234, {type: 'SOME_UNSUPPORTED_ACTION'})).toBe(1234)
})

it('should reset state for RESET_FORM', () => {
  expect(reducer(1234, {type: actionNames.RESET_FORM})).toBe(defaultValue)
})

it('should change state for ADD_APPLY action', () => {
  expect(reducer(1234, {type: actionNames.ADD_APPLY, payload: 4321})).toBe(4321)
})
