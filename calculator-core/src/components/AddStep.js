import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {getPlugins} from '../reducers'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

const isStateValid = state => state.instruction !== '' & state.value !== '' && !isNaN(state.value)

class AddStep extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      instruction: ''
    }
  }

  onValueChange = event => {
    this.setState({value: event.target.value})
  }

  onInstructionSelect = event => {
    this.setState({instruction: event.target.value})
  }

  onInstructionSubmit = () => {
    if (!isStateValid(this.state)) {
      return
    }
    if (this.state.instruction === 'apply') {
      this.props.addApply(this.state.value)
    } else {
      this.props.addStep({type: this.state.instruction, value: this.state.value})
    }
    this.setState({value: '', instruction: ''})
  }

  render() {
    const {plugins} = this.props

    return (
      <Form inline>
        <FormGroup>
          <Label for="instruction" hidden>Instruction</Label>
          <Input type="select" name="instruction" id="instruction" placeholder="Select Instruction"
                 onChange={this.onInstructionSelect} value={this.state.instruction}>
            <option value=""></option>
            <option value="apply">Apply</option>
            {plugins.map(plugin => <option value={plugin.type} key={plugin.type}>{plugin.name}</option>)}
          </Input>
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="Value" hidden>Value</Label>
          <Input type="text" name="value" id="value" placeholder="Value" onChange={this.onValueChange}
                 value={this.state.value}/>
        </FormGroup>
        {' '}
        <Button type="button" disabled={!isStateValid(this.state)} onClick={this.onInstructionSubmit}>
          Add Instruction
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  plugins: getPlugins(state)
})

export default connect(mapStateToProps, actions)(AddStep)
