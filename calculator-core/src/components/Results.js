import React from 'react'
import {connect} from 'react-redux'
import {selectors} from '../reducers'
import * as actions from '../actions'
import {Button} from 'reactstrap'

const Results = ({result, resetForm}) => (
  <div>
    Result: {result}
    <Button type="button" onClick={resetForm}>
      Reset
    </Button>
  </div>
)

const mapStateToProps = state => ({
  result: selectors.getCalculatorResultValue(state)
})

export default connect(mapStateToProps, actions)(Results)
