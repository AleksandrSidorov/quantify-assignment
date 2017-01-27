import React from 'react'
import { connect } from 'react-redux'

import { addEvent } from '../actions'

class AddEvent extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(
      () => this.props.dispatch(addEvent('Random')), 20000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div>
        <form onSubmit={event => {
          event.preventDefault()
          if (!this.input.value.trim()) {
            return
          }
          this.props.dispatch(addEvent(this.input.value))
          this.input.value = ''
        }}>
          <input ref={node => this.input = node} />
          <button type="submit">
            Add Event
          </button>
        </form>
      </div>
    )
  }
}

AddEvent = connect()(AddEvent)

export default AddEvent
