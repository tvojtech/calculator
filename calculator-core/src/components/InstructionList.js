import React from 'react'
import {connect} from 'react-redux'
import {getInstructionList} from '../reducers'

const InstructionList = ({instructions}) => (
  <ul>
    {instructions.map((instruction, idx) => <li key={idx}>{instruction.type} {instruction.value}</li>)}
  </ul>
)

const mapStateToProps = state => ({
  instructions: getInstructionList(state)
})

export default connect(mapStateToProps)(InstructionList)
