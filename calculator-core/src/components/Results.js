import React from 'react'
import {connect} from 'react-redux'
import {selectors} from '../reducers'
import * as actions from '../actions'
import {Button} from 'reactstrap'

const Results = ({getCalculatorResultValue, shouldShowResult, resetForm, showResult}) => (
  <div>
    <div>
      <Button type="button" color="primary" onClick={showResult}>
        Calculate
      </Button>
      <Button type="button" color="danger" onClick={resetForm}>
        Reset
      </Button>
    </div>
    {shouldShowResult && <div className="result">Result: {getCalculatorResultValue()}</div>}
  </div>
)

const mapStateToProps = state => ({
  shouldShowResult: selectors.getShowResult(state),
  getCalculatorResultValue: selectors.getCalculatorResultValue.bind(null, state)
})

export default connect(mapStateToProps, actions)(Results)
