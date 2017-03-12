import React from 'react'
import {connect} from 'react-redux'
import {selectors} from '../reducers'

const InstructionList = ({instructions, apply}) => (
  <ul>
    {instructions.map((instruction, idx) => <li key={idx}>{instruction.name} {instruction.value}</li>)}
    {<li>{'Apply ' + apply}</li>}
  </ul>
)

const mapStateToProps = state => ({
  instructions: selectors.getInstructionList(state).map(
    instr => Object.assign({}, instr, {name: selectors.getPlugins(state).find(pl => pl.type === instr.type).name})
  ),
  apply: selectors.getApplyValue(state)
})

export default connect(mapStateToProps)(InstructionList)
