import React from 'react'
import {connect} from 'react-redux'
import {selectors} from '../reducers'

const InstructionList = ({instructions, apply}) => (
  <ul>
    {instructions.map((instruction, idx) => <li key={idx}>{instruction.type} {instruction.value}</li>)}
    {<li>{'Apply ' + apply}</li>}
  </ul>
)

const mapStateToProps = state => ({
  instructions: selectors.getInstructionList(state),
  apply: selectors.getApplyValue(state)
})

export default connect(mapStateToProps)(InstructionList)
