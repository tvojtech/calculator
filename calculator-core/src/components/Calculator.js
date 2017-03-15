import React from 'react'
import InstructionList from './InstructionList'
import AddStep from './AddStep'
import Results from './Results'

export default () => (
  <div className="calculator-body">
    <AddStep/>
    <InstructionList/>
    <Results/>
  </div>
)
