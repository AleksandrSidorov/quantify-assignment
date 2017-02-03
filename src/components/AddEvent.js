import React from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { addEvent } from '../actions'

class AddEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.props.dispatch(addEvent('Random Event')), 20000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <form onSubmit={event => {
          event.preventDefault()
          if (!this.state.input.trim()) {
            return
          }
          this.props.dispatch(addEvent(this.state.input))
          this.setState({ input: '' })
        }}>
            <TextField
              onChange={this.handleInputChange}
              value={this.state.input}
              hintText="Event Text"
            />
            <RaisedButton label="Add Event" type="submit" />
        </form>
      </MuiThemeProvider>
      </div>
    )
  }
}

AddEvent = connect()(AddEvent)

export default AddEvent
