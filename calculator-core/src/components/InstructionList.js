import React from 'react'
import {connect} from 'react-redux'
import {selectors} from '../reducers'

const InstructionList = ({instructions, apply}) => (
  <div className="instruction-list">
    <ol>
      {instructions.map((instruction, idx) => <li key={idx}>{instruction.name} {instruction.value}</li>)}
      {<li>{'Apply ' + apply}</li>}
    </ol>
  </div>
)

const mapStateToProps = state => ({
  instructions: selectors.getInstructionList(state).map(
    instr => Object.assign({}, instr, {name: selectors.getPlugins(state).find(pl => pl.type === instr.type).name})
  ),
  apply: selectors.getApplyValue(state)
})

export default connect(mapStateToProps)(InstructionList)
