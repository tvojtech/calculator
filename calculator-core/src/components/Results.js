import React from 'react'
import {connect} from 'react-redux'
import {selectors} from '../reducers'

const Results = ({result}) => (
  <div>
    Result: {result}
  </div>
)

const mapStateToProps = state => ({
  result: selectors.getCalculatorResultValue(state)
})

export default connect(mapStateToProps)(Results)
